import React, { Suspense } from 'react';

const AboutMe = React.lazy(() => import('../components/AboutMe'));

const About = () => {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
     <AboutMe />
      </Suspense> 
    </div>
  );
};

export default About;