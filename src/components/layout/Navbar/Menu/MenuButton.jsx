import { useEffect, useRef, useState } from "react"
import "./hamburger.css"
import Menu from "./Menu"
import Overlay from "./Overlay"

let useClickOutside = (handler) => {
    let menuRef = useRef()

    useEffect(() => {
        let outsideHandler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                handler()
            }
        }

        document.addEventListener("mousedown", outsideHandler)

        return () => {
            document.removeEventListener("mousedown", outsideHandler)
        }
    })

    return menuRef
}

const MenuButton = ({ links }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
        document.getElementById("burger").classList.toggle("is-active")
        document.body.classList.toggle("modal-open")

    }
    const handleClose = () => {
        setOpen(false)
        document.getElementById("burger").classList.remove("is-active")
        document.body.classList.remove("modal-open")
        
    }

    let menuRef = useClickOutside(() => {
        setOpen(false)
        document.body.classList.remove("modal-open")
        if (open) {
            document.getElementById("burger").classList.toggle("is-active")
        }
    })
    return (
        <div>
            <div ref={menuRef}>
                <button
                    id="burger"
                    onClick={handleClick}
                    class="hamburger hamburger--vortex focus:outline-none"
                    type="button"
                >
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <Menu open={open} close={handleClose} links={links} />
            </div>
            <Overlay open={open} />
        </div>
    )
}

export default MenuButton
