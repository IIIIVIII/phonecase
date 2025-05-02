import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const HeroWrapper = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: linear-gradient(270deg, #000, #333, #000);
    background-size: 600% 600%;
    animation: ${gradientAnimation} 20s ease infinite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
`;

const Title = styled(motion.h1)`
    font-size: 5rem;
    letter-spacing: 0.4rem;
    z-index: 1;
`;

const Subtitle = styled(motion.h3)`
  margin-top: 20px;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  z-index: 1;
`;

function HeroSection() {
    return (
        <HeroWrapper id="home">
            <Overlay />
            <Title
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                W E L C O M E
            </Title>
            <Subtitle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                A Modern Phonecase Brand
            </Subtitle>
        </HeroWrapper>
    );
}

export default HeroSection;
