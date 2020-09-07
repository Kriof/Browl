import React from "react";
import "./Contact.css";
import logoBrowl from "../../images/main/logoBrowl.png";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      name: "",
      phone: "",
      email: "",
      body: "",
      msgSent: localStorage.getItem("msgSent") === "" ? false : true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;

    if (target.type === "checkbox") {
      if (target.checked) {
        this.state.hobbies[value] = value;
      } else {
        this.state.hobbies.splice(value, 1);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("msgSent", true);
    this.SendGridSend();
    // if(!this.state.msgSent){
    //     alert('msg Sent');
    //     console.log('msg sent');

    //     this.SendEmail();

    // }
    // else {
    //     event.preventDefault();
    //     console.log('msg prevented to sent');
    //     alert('prevented default behaviour');
    // }
  }

  render() {
    return (
      <div>
        <section className="Contact">
          <h2>Kontakt</h2>
          <form className="container" onSubmit={this.handleSubmit}>
            <div className="form">
              <div className="column">
                <h5>Skontaktuj się z nami</h5>
                <h6>
                  Napisz do nas wiadomość <br></br>
                </h6>
                <h6>
                  a z pewnością się odezwiemy <br></br>
                </h6>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Imię"
                  type="text"
                ></input>
                <input
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Telefon"
                  type="text"
                ></input>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="e-mail"
                  type="text"
                ></input>
              </div>
              <div className="column img">
                <img src={logoBrowl} />
              </div>
              <div className="row">
                <textarea name="body" placeholder="Treść wiadomości"></textarea>
              </div>
            </div>
            <input
              className="btn btn-submit"
              type="submit"
              value="wyślij"
            ></input>
          </form>
          <p>State: {this.state.msgSent}</p>
          <p>localStorage: {localStorage.getItem("msgSent")}</p>
          <div>
            <p>Test:</p>
            <p>Imie:{this.state.name}</p>
            <p>Phone:{this.state.phone}</p>
            <p>email:{this.state.email}</p>
          </div>
        </section>
      </div>
    );
  }
  //   );
}

export default Contact;
