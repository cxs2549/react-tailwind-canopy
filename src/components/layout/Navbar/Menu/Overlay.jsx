import styled from "styled-components"

const StyledOverlay = styled.div`
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: 0.3s ease;
`

const Overlay = ({ open }) => {
    return <StyledOverlay open={open}></StyledOverlay>
}

export default Overlay
