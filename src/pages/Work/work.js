import React from 'react';

function Work() {
  // A simple component with inline styles to ensure it's visible.
  return (
    <div style={{ padding: '50px', margin: '20px', color: 'black', backgroundColor: 'lightgray', border: '2px solid black' }}>
      <h1>Work Page Test: Successful</h1>
      <p>If you can see this message on your deployed website, it confirms that your routing and build configuration are correct.</p>
      <p>The error is inside the original work.js file (likely a case-sensitive image path).</p>
    </div>
  );
}

export default Work;
