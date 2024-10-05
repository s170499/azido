import React, { Suspense } from 'react';

const SoundCloudEmbed = React.lazy(() => import('../components/SoundCloudEmbed'));

const Audio = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
     <SoundCloudEmbed />
      </Suspense>
    </div>
  );
};

export default Audio;