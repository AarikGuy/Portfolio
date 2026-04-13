function About(){

    const FAQs = [
        {
            question: "What are your career goals?",
            answer: "I plan to get hired as a Software Engineer working in web development with a specialty in accessibility. I enjoy building websites and applications"
        },
        {
            question: "",
            answer: ""
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