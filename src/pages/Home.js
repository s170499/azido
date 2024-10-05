import React, { Suspense } from 'react';

const MainVideo = React.lazy(() => import('../components/MainVideo'));
const PhotoCollage = React.lazy(() => import('../components/PhotoCollage'));
const Moving = React.lazy(() => import('../components/Moving'));
const SpotifyEmbed = React.lazy(() => import('../components/SpotifyEmbed'));

const Home = () => {
  return (
    <div style={{background: 'black', margin: '0', padding: '0'}}>
         <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          
        }
      `}</style> 
    <Suspense fallback={<div>Loading...</div>}>
      <MainVideo height='100%'/>
      <Moving />
      <SpotifyEmbed />
      
      <PhotoCollage />
      </Suspense> 
    </div>
  );
};

export default Home;