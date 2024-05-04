import React from 'react'
import "./Form.css"
export default function Form() {
  return (
    <div className='parentDiv'>
        <form className='myForm' action="">
            <div>
                <label htmlFor="fname">First Name : </label>
                <input type="text" name="fname" id="fname" />
            </div>
            <div>
                <label htmlFor="lname">Last Name :</label>
                <input type="text" name="lname" id="lname" />
            </div>
            <div className='emaildiv'>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
