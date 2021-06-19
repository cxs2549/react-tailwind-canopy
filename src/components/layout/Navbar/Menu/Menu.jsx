import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledMenu = styled.div`
    position: fixed;
    top: 57px;
    left: 0;
    width: 55%;
    height: 100vh;
    background: #fff;
    border-right: 1px solid lightgray;
    z-index: 2;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: 0.5s ease;
    transition-delay: 0.2s;
    div {
        padding: 2rem 20px;
        display: flex;
        flex-direction: column;
        a {
            margin-bottom: 0.5rem;
            text-transform: capitalize;
        }
    }
`

const Menu = ({ open, close, links }) => {
    return (
        <StyledMenu open={open}>
            <div>
                {links.map((link) => (
                    <NavLink onClick={close} to={link.to} key={link.name}>
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </StyledMenu>
    )
}

export default Menu
