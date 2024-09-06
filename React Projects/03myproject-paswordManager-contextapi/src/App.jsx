import { useState } from 'react'
import './App.css'
import {AllPass, AddPass, Navbar} from './components'
import { passContext } from './context/passContext'
import { useEffect } from 'react';

function App() {
  const [passwords, setPasswords] = useState(() => {
    const savedPass = localStorage.getItem("passwords");
    return savedPass ? JSON.parse(savedPass) : []
  });

  const addPassword = (item) => {
    setPasswords((prev) => {
      return [...prev, item]
    })
  }

  const deletePassword = (website) => {
    setPasswords((prev) => prev.filter((e) => e.website != website))
  }


  const maskPassword = (arg) => {
    let str = ""
    for (let i = 0; i < arg.length; i++) {
      str += "*"
    }
    return str;
  }


  const copytext = (text) => {
    window.navigator.clipboard.writeText(text).then(() => {
      //copy succesful
      document.querySelector("#copy").classList.remove("copy");
      setTimeout(() => {
        document.querySelector("#copy").classList.add("copy");
      }, 2000);
    },
      () => {
        // copy failed
        alert("Clipboard copying failed")
      });
  }

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwords))
  }, [passwords]);



  return (
    <passContext.Provider value={{passwords, addPassword, deletePassword, maskPassword, copytext}}>
      <Navbar/>
      <div className="container">
        <h1>Password Manager</h1>
        <p>We're thrilled to have you here. Your digital life contains a myriad of passwords,
          and we kmow how
          challenging it can be to manage them all. That's why we're here to make it easy for you.
        </p>
        <AllPass />
        <AddPass />
      </div>
    </passContext.Provider>
  )
}

export default App