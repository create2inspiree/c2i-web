import React from 'react';

// Simple placeholder logo component — Strict B&W
function LogoPlaceholder() {
  return (
    <span style={{
      display: 'inline-block',
      width: 32,
      height: 32,
      background: '#000000',
      borderRadius: '50%',
      marginRight: 8,
      verticalAlign: 'middle'
    }} aria-label="C2I Logo" />
  );
}

export default LogoPlaceholder;
