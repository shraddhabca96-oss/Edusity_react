import React from 'react';
import './Campus.css';

import gallery1 from '../../assets/pngtree-diverse-group-of-students-studying-in-a-library-with-open-books-image_16203293.jpg';
import gallery2 from '../../assets/GettyImages-1072191138.jpg';
import gallery3 from '../../assets/group-students-happy-be-back-university_23-2148586613.avif';
import gallery4 from '../../assets/cheerful-diversity-group-students-sitting-600nw-1214042104.webp';
import white_arrow from '../../assets/right-arrow-vector-icon-symbol-navigation-black-162728375.webp';

const Campus = () => {
  return (
    <section className="campus" id="campus">
      <h2 className="campus-title">Our Campus Life</h2>

      <div className="gallery">
        <img src={gallery1} alt="Library Study Group" />
        <img src={gallery2} alt="Outdoor Learning Space" />
        <img src={gallery3} alt="Students on Campus" />
        <img src={gallery4} alt="Group of Happy Students" />
      </div>

      <button className="btn dark-btn">
        See more here
        <img src={white_arrow} alt="Arrow" />
      </button>
    </section>
  );
};

export default Campus;
