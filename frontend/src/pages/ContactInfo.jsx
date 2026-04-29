

function ContactInfo() {
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
        <div className="feedback-section">
            <h3>Let's Connect</h3>
            <div className="instructions-container">
                <div className="name-fields">
                    <div className="field">
                    <label htmlFor="first-name">First name:</label>
                    <input type="text" id="first-name"/>
                </div>
                <div className="field">
                    <label htmlFor="last-name">Last name:</label>
                    <input type="text" id="last-name"/>
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone"/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email"/>
                </div>
                
                </div>
                <div className="field">
                    <label htmlFor="feedback">Feedback:</label>

                    <p className="field-help">
                        If you have previously interviewed me, I would greatly appreciate any feedback on 
                        my performance and areas where I can improve. If you also have suggestions for improving 
                        my website, please feel free to share them. Any feedback is sincerely appreciated.
                    </p>
                    
                    <textarea id="feedback" rows="6" placeholder="Write your feedback here..." aria-required="true"/>
                </div>
                <input type="submit" value="Submit"></input>
            </div>
        </div>
    </>
    );  
}

export default ContactInfo;