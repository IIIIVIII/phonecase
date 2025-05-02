import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CategoryFilter from './CategoryFilter';

const Section = styled.section`
    padding: 80px 20px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    text-align: center;
    min-height: 50vh;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    margin: 10px;
    font-size: 1rem;
    border-radius: 4px;
    border: none;
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
`;

const ReportTable = styled.table`
    margin: 20px auto;
    border-collapse: collapse;
    width: 80%;
    color: ${props => props.theme.colors.text};

    th, td {
        border: 1px solid ${props => props.theme.colors.text};
        padding: 10px;
    }
    th {
        background: ${props => props.theme.colors.accent};
    }
`;

function ReportSection() {
    const [startDate, setStartDate] = useState('2025-01-01');
    const [endDate, setEndDate] = useState('2025-12-31');
    const [categoryId, setCategoryId] = useState('');
    const [reportData, setReportData] = useState([]);

    const generateReport = () => {
        const params = { startDate, endDate };
        if (categoryId) {
            params.categoryId = categoryId;
        }

        axios.get('http://localhost:8081/api/reports/sales', { params })
            .then(response => {
                console.log('Report data:', response.data);
                setReportData(response.data);
            })
            .catch(error => {
                console.error('Error generating report:', error);
            });
    };

    return (
        <Section id="report">
            <Title>Sales Report</Title>

            <div>
                <label>
                    Start Date:
                    <Input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                    />
                </label>
                <label>
                    End Date:
                    <Input
                        type="date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <CategoryFilter onChange={value => setCategoryId(value)} />
            </div>

            <Button onClick={generateReport}>Generate Report</Button>

            {reportData.length > 0 ? (
                <ReportTable>
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Total Sold</th>
                        <th>Total Revenue</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reportData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.productName}</td>
                            <td>{row.totalSold}</td>
                            <td>{row.totalRevenue}</td>
                        </tr>
                    ))}
                    </tbody>
                </ReportTable>
            ) : (
                <p>No report data available.</p>
            )}
        </Section>
    );
}

export default ReportSection;
