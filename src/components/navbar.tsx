import { useWindowSize } from "@/hooks/useWindowSize"
import { BreakPoints } from "@/hooks/breakpoints";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler, Button } from 'reactstrap';
import { useState } from 'react';

const { laptopSize } = BreakPoints()

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { width } = useWindowSize();
    const deviceIsMobile = width < laptopSize;
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="#">
                <img src={deviceIsMobile ? `/imgs/J_W dark noB - fav.svg` : "/imgs/Full name-stacked.svg"} />
            </NavbarBrand>
            <NavbarToggler className="no-border" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Bio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Experiences</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Education</NavLink>
                    </NavItem>
                </Nav>
                <Button className="rounded-pill" color="secondary">Get in touch</Button> 
            </Collapse>
        </Navbar>
    )
}
