import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import ProductForm from './ProductForm';
import ProductEditForm from './ProductEditForm';

const Section = styled.section`
    padding: 80px 20px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    text-align: center;
    min-height: 60vh;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
    margin-bottom: 20px;
`;

const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.text};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    &:hover {
        opacity: 0.8;
    }
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 30px;
`;

const ProductCard = styled(motion.div)`
    border: 1px solid ${props => props.theme.colors.text};
    padding: 20px;
    border-radius: 8px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.05);
`;

function WorkSection() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const fetchProducts = () => {
        const url = selectedCategory
            ? `http://localhost:8081/api/products?categoryId=${selectedCategory}`
            : 'http://localhost:8081/api/products';
        axios.get(url)
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    };

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);

    const generateTestData = async () => {
        const testData = [
            {
                name: 'Neon Case',
                description: 'Bright neon phonecase with glowing edges',
                price: 15.99,
                stock: 50,
                category_id: 1
            },
            {
                name: 'Marble Case',
                description: 'Stylish marble pattern phonecase',
                price: 25.49,
                stock: 30,
                category_id: 2
            },
            {
                name: 'Carbon Fiber Case',
                description: 'Lightweight carbon fiber design',
                price: 29.99,
                stock: 20,
                category_id: 3
            },
            {
                name: 'Floral Case',
                description: 'Colorful floral pattern, perfect for spring',
                price: 12.99,
                stock: 100,
                category_id: 4
            },
            {
                name: 'Retro Case',
                description: 'Vintage 80s design with vibrant colors',
                price: 19.99,
                stock: 40,
                category_id: 5
            }
        ];

        try {
            for (let product of testData) {
                await axios.post('http://localhost:8081/api/products', product);
            }
            alert('Test data generated successfully!');
            fetchProducts();
        } catch (error) {
            console.error('Error generating test data:', error);
            alert('Failed to generate test data.');
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product.');
        }
    };

    const startEditing = (product) => {
        setEditingProduct(product);
    };

    const cancelEditing = () => {
        setEditingProduct(null);
    };

    const onEditSuccess = () => {
        setEditingProduct(null);
        fetchProducts();
    };

    return (
        <Section id="work">
            <Title>Our Work (Products)</Title>

            {/* 分类过滤 */}
            <CategoryFilter onChange={(value) => setSelectedCategory(value)} />

            {/* 操作按钮 */}
            <div>
                <Button onClick={generateTestData}>Generate Test Data</Button>
                <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Hide Form' : 'Add New Product'}
                </Button>
            </div>

            {showForm && <ProductForm onSuccess={fetchProducts} />}

            {/* 编辑表单 */}
            {editingProduct && (
                <ProductEditForm
                    product={editingProduct}
                    onSuccess={onEditSuccess}
                    onCancel={cancelEditing}
                />
            )}

            <ProductGrid>
                <AnimatePresence>
                    {products.length === 0 ? (
                        <p>No products available.</p>
                    ) : (
                        products.map(product => (
                            <ProductCard
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <p>Stock: {product.stock}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                    <Button onClick={() => startEditing(product)}>Edit</Button>
                                    <Button onClick={() => deleteProduct(product.id)}>Delete</Button>
                                </div>
                            </ProductCard>
                        ))
                    )}
                </AnimatePresence>
            </ProductGrid>
        </Section>
    );
}

export default WorkSection;
