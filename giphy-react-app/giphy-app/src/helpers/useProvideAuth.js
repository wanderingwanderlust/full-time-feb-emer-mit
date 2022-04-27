import {useState}  from 'react'

const users = [];

function useProvideAuth() {
    const [user, setUser] = useState({
        username: '',
        balance: 0,
        password: ''
    });


    const signin = (cb) => {
        console.log('signing in')
        console.log(cb)
        setUser('greg')
        cb();
    }

    const signout = (cb) => {
        setUser(null)
        cb();
    }

    return{
        user,
        signin,
        signout
    }
}

export default useProvideAuth;