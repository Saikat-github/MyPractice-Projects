import React from 'react'
import { passContext, usePasswords } from '../context/passContext'
import { v4 as uuidv4 } from 'uuid';

const AllPass = () => {
  const { passwords, deletePassword, maskPassword, copytext } = usePasswords()

  return (
    <>
      <h2>Your Password <span className="copy" id="copy">(Copied)</span></h2>
      <table>
        <thead>
          <tr>
            <th>Website </th>
            <th>Username </th>
            <th>Password </th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody>
          {passwords.length == 0 ? <tr><h4>No Data Found</h4></tr> : (passwords.map((e) => (
            <tr key={uuidv4()}>
              <td>{e.website} <svg onClick={() => copytext(e.website)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg></td>
              <td>{e.username}  <svg onClick={() => copytext(e.username)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg></td>
              <td>{maskPassword(e.password)} <svg onClick={() => copytext(e.password)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg></td>
              <td><button onClick={() => deletePassword(e.website)} className="delBtn" id="${element.website}">Delete</button></td>
            </tr>
          ))
          )}
        </tbody>
      </table>
    </>
  )
}

export default AllPass