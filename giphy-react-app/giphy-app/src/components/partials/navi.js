import { Navbar, NavbarBrand, NavLink, NavItem, Nav } from "react-bootstrap";


function Navi() {

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand to="#">Giphy App</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem to="#">
                        <NavLink to="#">About</NavLink>
                    </NavItem>
                    <NavItem to="#">
                        <NavLink to="#">Search</NavLink>
                    </NavItem>
                    <NavItem to="#">
                        <NavLink to="#">Login</NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
    )
}

export default Navi