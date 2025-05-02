import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Select = styled.select`
    padding: 10px;
    margin: 10px 0;
    font-size: 1rem;
    border-radius: 4px;
    border: none;
`;

function CategoryFilter({ onChange }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/categories')
            .then(response => {
                console.log('Fetched categories:', response.data);
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                // 如果请求失败，使用备用数据
                setCategories([
                    { id: 1, name: 'Neon' },
                    { id: 2, name: 'Marble' },
                    { id: 3, name: 'Carbon Fiber' },
                    { id: 4, name: 'Floral' },
                    { id: 5, name: 'Retro' }
                ]);
            });
    }, []);

    return (
        <Select onChange={(e) => onChange(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </Select>
    );
}

export default CategoryFilter;
