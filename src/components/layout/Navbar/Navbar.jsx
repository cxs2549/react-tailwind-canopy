import styled from "styled-components"
import MenuButton from "./Menu/MenuButton"

const StyledNav = styled.header`
    nav {
        height: 65px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        #left {
            display: flex;
            align-content: center;
            gap: 1rem;
        }
    }
`

const Navbar = () => {
    return (
        <StyledNav>
            <nav>
                <div id="left">
                    <div>
                        <MenuButton />
                    </div>
                    <div>SuperVision Design</div>
                </div>
                <div id="center"></div>
                <div id="right">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </nav>
        </StyledNav>
    )
}

export default Navbar
