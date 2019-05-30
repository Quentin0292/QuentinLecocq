import React from 'react'


const Form = () => {
  return(
    <div>
      <h1>Formulaire de Contact</h1>
      <form name="contact" method="POST" data-netlify="true">
        <div className="field">
          <label className="label">Name</label>
          <div>
            <input className="input" type="text" name="name" placeholder="text input"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input type="email" className="input" name="email" placeholder="Email input"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option value="job">Job</option>
                <option value="perso">Perso</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" name="message" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox"/>
              {` `}I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-link">Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
