import resumeDoc from '../assets/Resume_AarikGuy.pdf';

function Resume(){
    return(
    <section id="resume">
    <h2>Resume</h2>
    <p>
        This is my most up-to-date resume, and I’ll continue updating it as my career grows. I created it entirely in 
        <a href="https://en.wikipedia.org/wiki/LaTeX" title="Learn more about LaTeX"><strong>LaTeX</strong></a> 
        using <a href="https://www.overleaf.com" title="Visit Overleaf"><strong>Overleaf</strong></a> which makes it easy 
        to generate clean, professional PDF documents that are perfect for technical writing.
    </p>

    <iframe
        src={resumeDoc}
        style={{width: "100%", height:"800px", border:"none"}}
        title="Aarik's Resume">
    </iframe>

    </section>
    );
}

export default Resume;