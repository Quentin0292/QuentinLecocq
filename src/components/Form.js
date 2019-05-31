import React from 'react'


const Form = () => {
  return(
    <div>
      <h1>Formulaire de Contact</h1>
      <form name="contact" method="POST" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <div className="field">
          <label htmlFor="name" className="label">Name</label>
          <div>
            <input className="input" type="text" name="name" id="name" placeholder="text input"/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="email" className="label">Email</label>
          <div className="control">
            <input type="email" className="input" name="email" id="email" placeholder="Email input"/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="message" className="label">Message</label>
          <div className="control">
            <textarea className="textarea" name="message" id="message" cols="30" rows="10"></textarea>
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
