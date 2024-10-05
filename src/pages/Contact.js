import React, { Suspense } from 'react';

const MessageForm = React.lazy(() => import('../components/MessageForm'));

const Contact = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
     <MessageForm />
      </Suspense>
    </div>
  );
};

export default Contact;