import styled from "styled-components"

const StyledMenu = styled.div`
    position: fixed;
    top: 65px;
    left: 0;
    width: 50%;
    height: 100vh;
    background: #fff;
    z-index: 2;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: 0.5s ease;
    transition-delay: .2s;
    ul {
        padding: 2rem 20px;
        li {
            margin-bottom: .5rem;
            text-transform: capitalize;
        }
    }
`

const Menu = ({ open }) => {
    const links = ["home", "about us", "contact us", "services"]
    return (
        <StyledMenu open={open}>
            <ul>
                {links.map((link) => (
                    <li key={link}>{link}</li>
                ))}
            </ul>
        </StyledMenu>
    )
}

export default Menu
