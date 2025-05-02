import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    z-index: 100;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
`;

const NavLinks = styled.div`
    a {
        margin-left: 30px;
        font-size: 1rem;
        letter-spacing: 0.15rem;
        transition: opacity 0.3s;
        &:hover {
            opacity: 0.7;
        }
    }
`;

function NavBar() {
    return (
        <NavContainer>
            <Logo>YourBrand</Logo>
            <NavLinks>
                <a href="#home">H O M E</a>
                <a href="#work">W O R K</a>
                <a href="#manifesto">M A N I F E S T O</a>
                <a href="#contact">C O N T A C T</a>
            </NavLinks>
        </NavContainer>
    );
}

export default NavBar;
