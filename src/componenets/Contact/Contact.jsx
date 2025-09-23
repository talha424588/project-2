import "./Contact.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Contact() {
  return (
    <div className="container">
      <div className="contact-section ">
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <section>
        <div className="contact-form">
          <div className="top-btn">
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
            <Button text="VIA CALL" icon={<FaPhoneAlt />} />
          </div>
        </div>
        <Button text="VIA EAMIL FORM" icon={<HiMail />} isOutline={true} />
        <div className="contact-image"></div>

        <form action="#">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
          </div>
          <div className="form-control">
            <label htmlFor="email">email</label>
            <input type="email" />
          </div>
          <div className="form-control">
            <label htmlFor="text">text</label>
            <textarea name="text" id=""></textarea>
          </div>
          <div style = {{display:"flex",justifyContent:"end",width:"50%"}}>
            <Button text="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
}
export default Contact;
