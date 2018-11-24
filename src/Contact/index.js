import React, {Component} from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      message: '',
      formSubmitted: false
    };
  }

  handleUserChange = this.handleUserChange.bind(this);
 handleEmailChange = this.handleEmailChange.bind(this);
 handleMessageChange = this.handleMessageChange.bind(this);
 handleSubmit = this.handleSubmit.bind(this);

 handleUserChange(event) {
   this.setState({
     userName: event.target.value
   });
 }

 handleEmailChange(event) {
   this.setState({
     userEmail: event.target.value
   });
 }

 handleMessageChange(event) {
   this.setState({
     message: event.target.value
   });
 }

 handleSubmit(event) {
   event.preventDefault();

   this.sendMessage(
     'contact_form',
     this.state.userEmail,
     'zte.zachary@gmail.com',
     this.state.message,
     this.state.userName
   );

   this.setState({
     userName: '',
     userEmail: '',
     message: '',
     formSubmitted: true
   })
 }

 sendMessage(templateId, userEmail, receiverEmail, message, userName) {
   window.emailjs
     .send('mailgun', templateId, {
       userEmail,
       receiverEmail,
       message,
       userName
     })
     .then(res => {
       this.setState({
         formEmailSent: true
       });
     })
     .catch(err => console.error('Failed to send message. Error: ', err))
 }

  render() {
    return(
      <div>
      <Nav />
            <div className="contactBox">
               <div className="contact-form-container">
                 <form className="contact-form" onSubmit={this.handleSubmit}>
                   <p>Name*</p>
                   <input
                     type="text"
                     name="name"
                     onChange={this.handleUserChange}
                     required
                     value={this.state.userName}>
                   </input>
                   <p>Email*</p>
                   <input
                     type="email"
                     name="email"
                     onChange={this.handleEmailChange}
                     required
                     value={this.state.userEmail}>
                   </input>
                   <p>Message</p>
                   <textarea
                     rows="5"
                     cols="50"
                     onChange={this.handleMessageChange}
                     value={this.state.message}>
                   </textarea>
                   <button className="send-button">Send</button>
                 </form>
                 <br />
                 {this.state.formSubmitted ? 'Message sent!' : null}
               </div>
              <div className="contactEmailDiv">
                <p><img src="images/paramountsmall_dark.svg"  alt="Paramount Utility" class="img-responsive"/></p>
                <p> <a href="mailto:info@paramountutility.com">info@paramountutility.com</a></p>
                <p> <a href="mailto:careers@paramountutility.com">careers@paramountutility.com</a></p>
                <p> (720) 726-4000</p>
          
                <p>Paramount Utility Corporation<br/>
                  2505 West 2nd Avenue, Suite 10<br/>
                  Denver, CO 80219</p>
                <p> <a href="https://www.google.com/maps/place/2505+W+2nd+Ave+%2310,+Denver,+CO+80219/@39.720266,-105.01765,17z/data=!4m7!1m4!3m3!1s0x876c7f4458915ddb:0x680ebaa340d59b36!2s2505+W+2nd+Ave+%2310,+Denver,+CO+80219!3b1!3m1!1s0x876c7f4458915ddb:0x680ebaa340d59b36" target="_blank">Get Directions</a></p>
            </div>
          </div>
            <Footer />
        </div>

    )
  }
}

export default Contact;
