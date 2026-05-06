import { useState } from "react";
import { sendEmail } from "../api/contactAPI";

function ContactInfo() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT CLICKED");

        try {
            await sendEmail(formData);
            console.log("Email sent!");
        } catch (err) {
            console.error("Error sending email:", err);
        }
    };

    return(
    <>
        <title>Contact Info | Portfolio</title>
        <div className="intro">
            <div className="intro-heading-and-text">
                <h2>Contact</h2>
                <p>
                Feel free to reach out regarding collaboration opportunities, interview feedback, or suggestions for website improvements and new features. 
                </p>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="feedback-section">
            <h3>Let's Connect</h3>
            <div className="instructions-container">
                <div className="name-fields">
                    <div className="field">
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" id="firstName" onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={handleChange}/>
                </div>
                
                </div>
                <div className="field">
                    <label htmlFor="feedback">Feedback:</label>

                    <p className="field-help">
                        If you have previously interviewed me, I would greatly appreciate any feedback on 
                        my performance and areas where I can improve. If you also have suggestions for improving 
                        my website, please feel free to share them. Any feedback is sincerely appreciated.
                    </p>
                    
                    <textarea id="feedback" rows="6" placeholder="Write your feedback here..." aria-required="true" onChange={handleChange}/>
                </div>
                <div className="submit-btn">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    </>
    );  
}

export default ContactInfo;