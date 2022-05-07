import React from "react";
import { SidebarContainer, Icon, CloseIcon,
         SidebarWrapper, SidebarMenu, SidebarLink,
         SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon>
                    
                </CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} >
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Descobrir
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Cadastro
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin' onClick={toggle}>
                        Log-In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;