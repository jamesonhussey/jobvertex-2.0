import { Link } from "react-router-dom";
import './ApplicationPage.css'

export default function ApplicationPage() {
  return (
    <>
      <div className="application-page-container">
        <div className="why-us-container">
          <h1>Why Us? </h1>
          <p>It can be incredibly difficult to find entry level jobs in today's job market. Most companies require experience to get experience or expect developers to come equipped with the skills of an entire IT department. JobVertex is attempting to defy these trends and allow ambitious, quality, and, yet, inexperienced developers a chance to prove their skills in a professional environment. We hope to act as a springboard for those who wish to gain experience and work with a friendly, supportive management team.</p>
        </div>
        <div>
          <Link to="/junior-web-dev-application">
            <button>Application Here</button>
          </Link>
        </div>
        <h1 className="current-offerings">Current Offerings</h1>
        <p>Note: Must be LOGGED OUT to submit an application. This is especially important if submitting an application for more than one job offer.</p>
        <div className="job-offer-entry">
          <h2>
            <Link to="/junior-web-dev-application">Junior Web Developer</Link>
          </h2>
          <h4>Description: </h4>
          <p>JobVertex is seeking a Software Engineer to help us on our journey to build a one-stop-shop for job market related media. This includes but is not limited to the following: a curated news feed of articles from other sources, a forum where users can post related content or their own experiences, a place for JobVertex original articles (articles we write and publish), and another for our team and selected members to publish their personal projects. Our site strives to bring the latest news, advice, and trends from the job market straight to your devices.</p>
          <h4>Responsibilities: </h4>
          <ul>
            <li>Collaborate with cross-functional teams, including designers, to implement and refine user interfaces.</li>
            <li>Develop efficient and reusable front-end components using modern web technologies.</li>
            <li>Ensure the technical feasibility of UI/UX designs and implement them with a focus on performance and responsiveness.</li>
            <li>Stay updated on industry trends and best practices, and contribute innovative ideas to enhance the front-end development process.</li>
          </ul>
          <h4>Minimum Qualifications: </h4>
          <ul>
            <li>Bachelor's degree in Computer Science, Software Engineering, bootcamp, or equivalent experience.</li>
            <li>Proven experience as a Software Engineer or similar role (no minimum duration required, only demonstrable skill).</li>
            <li>Strong proficiency in React, HTML, Javascript, CSS, etc.</li>
            <li>Experience with Node.js, front and back end development, and, preferably, MERN Stack experience.</li>
            <li>Experience with responsive design and mobile-first development.</li>
            <li>Effective communication and collaboration skills.</li>
            <li>Ability to adapt to new technologies and learn quickly in a fast-paced environment.</li>
          </ul>
          <h4>Salary Information: </h4>
          <p>$50,000 - $75,000 depending on fit and experience.</p>
        </div>



        <div className="job-offer-entry">
          <h2>
            <Link to="/junior-web-dev-application">Web Dev Internship</Link>
          </h2>

          <h4>Description: </h4>
          <p>JobVertex is seeking a Software Engineer intern to help us on our journey to build a one-stop-shop for job market related media. This includes but is not limited to the following: a curated news feed of articles from other sources, a forum where users can post related content or their own experiences, a place for JobVertex original articles (articles we write and publish), and another for our team and selected members to publish their personal projects. Our site strives to bring the latest news, advice, and trends from the job market straight to your devices.</p>
          <p>Internship length and hours are negotiable based on current work/school schedules. College credit may be awarded upon request.</p>

          <h4>Responsibilities: </h4>
          <ul>
            <li>Collaborate with cross-functional teams, including designers, to implement and refine user interfaces.</li>
            <li>Develop efficient and reusable front-end components using modern web technologies.</li>
            <li>Ensure the technical feasibility of UI/UX designs and implement them with a focus on performance and responsiveness.</li>
            <li>Stay updated on industry trends and best practices, and contribute innovative ideas to enhance the front-end development process.</li>
          </ul>
          <h4>Minimum Qualifications: </h4>
          <ul>
            <li>Currently enrolled in or already graduated from Bachelor's degree program in Computer Science, Software Engineering, bootcamp, or equivalent experience.</li>
            <li>Strong proficiency in React, HTML, Javascript, CSS, front and back end development etc.</li>
            <li>Experience with responsive design and mobile-first development.</li>
            <li>Effective communication and collaboration skills.</li>
            <li>Ability to adapt to new technologies and learn quickly in a fast-paced environment.</li>
          </ul>
        </div>



        <div className="job-offer-entry">
          <h2>
            <Link to="/junior-web-dev-application">Writing/Journalism Internship</Link>
          </h2>

          <h4>Description: </h4>
          <p>JobVertex is seeking a talented intern to help us on our journey to build a one-stop-shop for job market related media. This internship will consist of writing original articles to be posted on the JobVertex website. Content and frequency of said articles will be up to the intern but subject to approval.</p>
          <p>Internship length and hours are negotiable based on current work/school schedules. College credit may be awarded upon request.</p>

          <h4>Responsibilities: </h4>
          <ul>
            <li>Create original, well-researched articles about the current job market, technology news, or even related hobbies.</li>
            <li>Present research and final products for approval.</li>
            <li>Cite any sources used throughout the writing process.</li>
            <li>Submit assignments on time.</li>

          </ul>
          <h4>Minimum Qualifications: </h4>
          <ul>
            <li>Currently enrolled in or already graduated from Bachelor's degree program in Journalism, related field, or equivalent experience.</li>
            <li>Portfolio to demonstrate experience and writing quality.</li>
          </ul>
        </div>
      </div>
    </>
  );
}