import { useState } from "react";
import { useAuth } from '../context/authContext';
import { useNavigate, useLocation } from "react-router-dom";

function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let { from } = location.state || { from: {pathname: '/'}}

    const login = (e) => {
        e.preventDefault();
        console.log(username, password)

        auth.signin(username, password).then(() => {
            navigate(from)
        })
    }

    

    return (
        <div>
            <form onSubmit={login}>
                <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;