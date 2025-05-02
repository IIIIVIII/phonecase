import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 80px 20px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    text-align: center;
    min-height: 50vh;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 1.1rem;
`;

function ManifestoSection() {
    return (
        <Section id="manifesto">
            <Title>Our Manifesto</Title>
            <Paragraph>
                We believe in merging art, technology, and personal expression to create the perfect phonecase.
                Every design is carefully crafted to embody style, comfort, and a bold statement.
                <br /><br />
                Our philosophy is to transform everyday accessories into unique expressions of individuality.
            </Paragraph>
        </Section>
    );
}

export default ManifestoSection;
