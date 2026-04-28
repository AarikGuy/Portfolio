function About(){

    const FAQs = [
        {
            question: "What are your career goals?",
            answer: "I plan to get hired as a Software Engineer working in web development with a specialty in accessibility. I enjoy building websites and applications and I don't plan on slowing down anytime soon."
        },
        {
            question: "What are your preferred stacks for making websites?",
            answer: "I enjoy building full-stack web applications using React, JavaScript, HTML, and CSS for the frontend, with C# and ASP.NET/.NET for the backend. I’m also comfortable working with SQL databases and REST APIs."
        },
        {
            question: "What project are you most proud of and why?",
            answer: "I'm most proud of my capstone project where we built a Wellness App for the Hip&Happy LLC. I enjoy helping and bettering the lives others."
        },
        {
            question: "What makes you different from other developers?",
            answer: "I never give up on myself. The year 2025 has been one of the hardest years for CS graduates and I make an effort to learn and grow from every failure and shortcoming. A trait I value most in myself is my perseverance to keep moving forward and improving my craft."
        },
        {
            question: "What are you currently working on?",
            answer: "I am currently working on this website off and on updating information, and I am also working on my indie game that I'm developing in Godot."
        },
        {
            question: "What kinds of projects do you enjoy building most?",
            answer: "I enjoy a mix of web development and game development."
        },
        {
          question: "Can I get the github link to your portfolio?",
          answer: "Yes :) https://github.com/AarikGuy/Portfolio"
        }
    ];

    return (
    <section id="about">
      <h2>About Me</h2>

      <div className="accordion my-accordion" id="accordionFlushExample">
        {FAQs.map((faq, index) => {
          const headingId = `flush-heading${index}`;
          const collapseId = `flush-collapse${index}`;

          return (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  {faq.question}
                </button>
              </h2>

              <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;