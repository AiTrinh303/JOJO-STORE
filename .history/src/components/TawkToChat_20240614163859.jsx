import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Create script element
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    
    // Configure script element
    s1.async = true;
    s1.src = 'https://embed.tawk.to/666c5271981b6c56477d41b5/1i0bi42q3';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    // Insert script element into the DOM
    s0.parentNode.insertBefore(s1, s0);

    // Cleanup function to remove script when component is unmounted
    return () => {
      if (s1) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

  return null;
};

export default TawkToChat;
