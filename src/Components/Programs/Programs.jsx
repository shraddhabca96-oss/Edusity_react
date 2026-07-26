import React from 'react';
import './Programs.css';
import program_1 from '../../assets/portrait-female-college-student-graduation-cap-gown-campus_115086-942.jpg';
import program_2 from '../../assets/istockphoto-495700524-612x612.jpg';
import program_3 from '../../assets/happy-smiling-couple-girl-boy-600nw-1950344395.webp';

const Programs = () => {
  return (
    <section className="programs" id="program">
      <h2 className="section-title">Our Programs</h2>

      <div className="programs-container">
        <div className="program-card">
          <img src={program_1} alt="Female college student in graduation gown" />
          <div className="caption">
            <p>Graduation Degree</p>
          </div>
        </div>

        <div className="program-card">
          <img src={program_2} alt="College student group" />
          <div className="caption">
            <p>Masters Degree</p>
          </div>
        </div>

        <div className="program-card">
          <img src={program_3} alt="Happy couple on campus" />
          <div className="caption">
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
