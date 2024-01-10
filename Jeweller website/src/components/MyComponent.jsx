import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log(width);
    };
  }, [width]);

  //...
}
export default MyComponent