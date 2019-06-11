import React from 'react'
import { navigateTo } from 'gatsby-link'
import 'bulma/css/bulma.css'


// Layout
import Layout from '../components/Layout'

import Head from '../components/Head'
import Hero from '../components/Hero'


function encode(data){
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// localhost:8000/contact
class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  }

  render(){
    return (
      <Layout>
        <Head title="Contact" />
        <Hero className="has-text-centered max-width-tablet">
          {/* <h1 className="title is-marginless">Contact</h1>
          <p>The best way to reach me is via <a href="https://twitter.com/QuentinLecocq1" target="_blank" rel="noopener noreferrer">@QuentinLecocq1</a> on twitter</p> */}
          <form
            name="contact"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact"/>
            <p hidden>
              <label>
                Dont't fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
              <div className="field">
                <label className="label">
                  Name<br />
                  <div className="control">
                    <input className="input" type="text" name="name" onChange={this.handleChange} required />
                  </div>
                </label>
              </div>
            <div className="field">
              <label className="label">
                Email<br />
                <div className="control">
                  <input className="input" type="email" name="email" onChange={this.handleChange} required />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label">
                Message<br />
                <div className="control">
                  <textarea className="textarea" name="message" onChange={this.handleChange} required />
                </div>
              </label>
            </div>
            <div className="field">
              <button className="button is-link is-hovered" type="submit">Send</button>
            </div>
          </form>
        </Hero>
      </Layout>
    )
  }
}

export default Contact
