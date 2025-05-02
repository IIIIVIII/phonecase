import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 80px 20px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    text-align: center;
    min-height: 40vh;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 1.1rem;
`;

function ContactSection() {
    return (
        <Section id="contact">
            <Title>Contact Us</Title>
            <Paragraph>
                For inquiries, feedback, or partnership opportunities, please email us at <strong>hello@yourbrand.com</strong> or follow us on Instagram @yourbrand.
            </Paragraph>
        </Section>
    );
}

export default ContactSection;
