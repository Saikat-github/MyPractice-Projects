import React from 'react'
import { usePasswords } from '../context/passContext'
import { useState } from 'react'

const AddPass = () => {
    const [info, setInfo] = useState({
        website: "",
        username: "",
        password: ""
    });

    const { addPassword } = usePasswords()

    const onSubmit = (e) => {
        e.preventDefault();
        addPassword(info);
        setInfo({
            website: "",
            username: "",
            password: ""
        })
    }

    const onChange = (e) => {
        setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    return (
        <>
            <h2>Add a Password</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="website">Website:</label>
                <input type="text" id="website" name="website" value={info.website} onChange={onChange} required />
                <br /><br />
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={info.username} onChange={onChange} required />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={info.password} onChange={onChange} required />
                <br /><br />
                <button className="btn">Submit</button>
            </form>
        </>
    )
}

export default AddPass