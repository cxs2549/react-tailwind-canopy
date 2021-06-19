import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import MenuButton from "./Menu/MenuButton"

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

const StyledNav = styled.header`
    nav {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        position: relative;
        @media screen and (min-width: 768px) {
            padding: 1rem 24px;
        }
        @media screen and (min-width: 1280px) {
            padding: 1rem 32px;
        }
        #left,
        #right {
            display: flex;
            align-content: center;
            justify-content: flex-end;
            width: 10%;
            @media screen and (min-width: 768px) {
                width: auto;
                justify-content: flex-start;
            }
        }
        #left {
            #logo {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                @media screen and (min-width: 768px) {
                    transform: translate(0);
                }
            }
            @media screen and (min-width: 768px) {
                gap: 1.5rem;
            }
        }
        #right {
            & > div {
                cursor: pointer;
            }
            @media screen and (min-width: 768px) {
                gap: 1.2rem;
            }
            .drop1-enter {
                opacity: 0;
            }
            .drop1-enter-active {
                opacity: 1;
                transition: opacity 500ms ease;
            }
        }
    }
`

const Navbar = () => {
    const links = [
        { name: "projects", to: "/projects" },
        { name: "about us", to: "/about-us" },
        { name: "contact us", to: "/contact-us" },
        { name: "services", to: "/services" },
    ]
    const drop1 = [
        { name: "link to new event", to: "/new-event" },
        { name: "upload files", to: "" },
        { name: "new this", to: "" },
        { name: "new that", to: "" },
    ]
    const drop2 = [
        { name: "profile", to: "/new-event" },
        { name: "settings", to: "" },
        { name: "help", to: "" },
        { name: "upgrade", to: "" },
    ]

    const [dropDown1, setDropDown1] = useState(false)
    const handleDrop1 = () => {
        setDropDown1(!dropDown1)
        console.log(dropDown1)
    }
    const [dropDown2, setDropDown2] = useState(false)
    const handleDrop2 = () => {
        setDropDown2(!dropDown2)
    }

    let dropDown1Ref = useClickOutside(() => {
        setDropDown1(false)
    })
    let dropDown2Ref = useClickOutside(() => {
        setDropDown2(false)
    })

    return (
        <StyledNav>
            <nav>
                <div id="left">
                    <div className="md:hidden">
                        <MenuButton links={links} />
                    </div>
                    <div id="logo" className="absolute md:static text-3xl">
                        <Link to="/">
                            <i class="fa fa-coffee" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center  text-sm relative">
                        <input
                            type="search"
                            placeholder="Search or jump to..."
                            className="border rounded px-3 "
                            style={{ height: "28px", width: "260px" }}
                        />
                        <div className="absolute right-3 opacity-70 text-gray-800">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="hidden md:flex whitespace-nowrap gap-4 items-center capitalize text-sm font-medium text-gray-500">
                        {links.map((link) => (
                            <NavLink
                                exact
                                to={link.to}
                                activeClassName="text-gray-900"
                                className="hover:text-gray-600"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div id="right">
                    <div>
                        <Link to="/notifications">
                            <i className="fa fa-bell" aria-hidden="true"></i>
                        </Link>
                    </div>

                    <div ref={dropDown1Ref} className="flex items-center">
                        <div
                            onClick={handleDrop1}
                            className="hidden md:flex items-center space-x-1 relative"
                        >
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                            {dropDown1 && (
                                <div
                                    className="absolute flex flex-col bg-gray-100 text-sm capitalize space-y-2 right-0 top-0 mt-8 whitespace-nowrap px-3 py-3 rounded shadow-lg"
                                    style={{ width: "168px" }}
                                >
                                    {drop1.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.to}
                                            className="hover:text-gray-500"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div ref={dropDown2Ref} className="flex items-center">
                        <div
                            onClick={handleDrop2}
                            className="hidden md:flex items-center space-x-1 relative"
                        >
                            <div className="rounded-full bg-green-500 h-5 w-5"></div>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                            {dropDown2 && (
                                <div
                                    className="absolute flex flex-col bg-gray-100 text-sm capitalize space-y-2 right-0 top-0 mt-8 whitespace-nowrap px-3 py-3 rounded shadow-lg"
                                    style={{ width: "168px" }}
                                >
                                    {drop2.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.to}
                                            className="hover:text-gray-500"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </StyledNav>
    )
}

export default Navbar
