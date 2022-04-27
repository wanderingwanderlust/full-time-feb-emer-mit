import { Navbar, NavbarBrand, Collapse, NavLink, NavItem, Nav } from 'reactstrap';
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

function Navi() {
    const auth =  useAuth();
    const navigate = useNavigate();

    console.log(auth);

    const signout = () => {
        auth.signout(() => {
            navigate('/login');
        })
    }

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">Giphy App</NavbarBrand>
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/search">Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/saved">Saved</NavLink>
                    </NavItem>
                    <NavItem>
                        { auth.user
                            ? <NavLink onClick={signout}>Logout</NavLink> 
                            : <NavLink tag={Link} to="/login">Login</NavLink>
                        }
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navi