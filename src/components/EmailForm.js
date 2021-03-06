import React from "react";

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    }
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xqkyelyv"
        method="POST"
      >
        <h5>email:</h5>
        <input type="email" name="email" />
        <h5>message:</h5>
        {/* <input type="text" name="message" /> */}
        <div className="input-field">
          <textarea type="text" className="materialize-textarea" name="message" />
        </div>
        {status === "SUCCESS" ? <p>sent!</p> : <button class="waves-effect waves-black btn-flat">send</button>}
        {/* <button class="modal-close waves-effect waves-green btn-flat">close</button> */}
        {status === "ERROR" && <p>whoops. there was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}