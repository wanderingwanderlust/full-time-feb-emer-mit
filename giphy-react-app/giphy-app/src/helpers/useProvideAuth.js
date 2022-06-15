import {useState}  from 'react'
import axios from 'axios';


const users = [];

function useProvideAuth() {
    const [user, setUser] = useState(
        localStorage.getItem('user')
    );


    const signin = (username, password) => {
        return axios.post('auth/login', {username, password}).then((res) => {
            console.log(res.data.decodedUser)
            setUser(res.data.decodedUser)
            localStorage.setItem('user', res.data.decodedUser.id)
            console.log('------------------------')
            console.log(localStorage.getItem('user'))
        })
    }

    const signout = (cb) => {
        setUser(null)
        localStorage.removeItem('user')
    }

    const authHeader = () => {
        return { Authorization: `Bearer ${user}`}
    }

    return{
        user,
        signin,
        signout,
        authHeader
    }
}

export default useProvideAuth;