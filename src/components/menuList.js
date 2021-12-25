import React from "react";
import { NavLink } from "react-router-dom";

function MenuList() {
    //   const { isOpen, onOpen, onClose } = useDisclosure()
    //   const btnRef = React.useRef()

    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/executive_functions_coaching",
            text: "Executive Functions Coaching",
        },
        {
            id: 3,
            path: "/somatic_mindfulness_practices",
            text: "Somatics and Minfulness",
        },
        {
            id: 4,
            path: "/our_team",
            text: "Our Team",
        },
        {
            id: 5,
            path: "/setting_up_coaching",
            text: "Setting up Coaching",
        },
    ]

    return (
        <ul className="menulist">
            {links.map((link) => {
                return (
                    <li key={link.id}>
                        <NavLink
                            to={link.path}
                            activeClassName="active-link"
                            // onClick={() => closeMenu()}
                            exact>
                            {link.text}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuList