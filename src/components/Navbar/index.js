import React, {useEffect, useState} from "react";
import {FaBars} from 'react-icons/fa';
import { IconContext } from "react-icons";
import {Nav,NavLogo,NavbarContainer, 
    IconeMobile, NavMenu, NavItem, NavLinks, NavBtin, NavBtinLink} 
    from './NavbarElements';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/">DuFromage</NavLogo>
                <IconeMobile onClick={toggle}>
                    <FaBars />
                </IconeMobile>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Catálogo</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Minha Conta</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Cadastro</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtin>
                    <NavBtinLink to="/signin">Log-In</NavBtinLink>
                </NavBtin>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
    )
};

export default Navbar