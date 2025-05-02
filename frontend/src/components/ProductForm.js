import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormWrapper = styled.form`
    margin: 20px auto;
    padding: 20px;
    max-width: 500px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    margin: 10px 0;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.text};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
`;

function ProductForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        category_id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/api/products', formData);
            alert('Product added successfully!');
            onSuccess();
            setFormData({
                name: '',
                description: '',
                price: '',
                stock: '',
                category_id: ''
            });
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product.');
        }
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <h3>Add New Product</h3>
            <Input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <TextArea
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <Input
                type="number"
                step="0.01"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
            />
            <Input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                required
            />
            <Input
                type="number"
                name="category_id"
                placeholder="Category ID"
                value={formData.category_id}
                onChange={handleChange}
                required
            />
            <Button type="submit">Submit</Button>
        </FormWrapper>
    );
}

export default ProductForm;
