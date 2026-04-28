import resumeDoc from '../assets/Resume_AarikGuy.pdf';

function Resume(){
    return(
    <>
     <div className='intro'>
        <div className='intro-heading-and-text'>
            <h2>Resume</h2>
            <p>
                This is my most up-to-date resume, and I’ll continue updating it as my career grows. I created it entirely   
                in <a href="https://en.wikipedia.org/wiki/LaTeX" title="Learn more about LaTeX"><strong>LaTeX</strong></a> using <a href="https://www.overleaf.com" title="Visit Overleaf"><strong>Overleaf</strong></a> which 
                makes it easy to generate clean, professional PDF documents that are perfect for technical writing. 
                If you wish to have a copy of my resume, here's a download <a href={resumeDoc} download="Resume_AarikGuy.pdf" aria-label='resume download link'>link</a>.
            </p>
        </div>
    </div>

  <div className='resume-container'>
    <iframe className='resume-iframe'
        src={resumeDoc}
        title="Aarik's Resume"
        loading="lazy">
    </iframe>
  </div>


    
    </>
    );
}

export default Resume;