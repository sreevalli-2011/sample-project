
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavComponent from '../NavComponent';





function AboutPage() {

  const paragraphStyle = {

    display: 'block', 
    margin: '0 auto', 
    textAlign: 'justify', 
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
    maxWidth: '800px',
    fontFamily: 'Roboto, sans-serif',
  };
  return (
    <div>
     
     <h1 style={{ textAlign: 'center' }}>About Page</h1>
     <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, eros a
        ultricies aliquam, justo justo gravida nulla, ac luctus metus odio id velit. 
        Integer euismod, libero at ultricies cursus, nisi purus interdum odio, non 
        hendrerit magna nunc ut lorem. Vivamus a dui eu est posuere interdum nec eu
        velit. Duis varius tortor ut fringilla facilisis. Fusce sagittis mauris eu eros
        venenatis, non tincidunt urna elementum.
      </p><br></br>

      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, eros a
        ultricies aliquam, justo justo gravida nulla, ac luctus metus odio id velit. 
        Integer euismod, libero at ultricies cursus, nisi purus interdum odio, non 
        hendrerit magna nunc ut lorem. Vivamus a dui eu est posuere interdum nec eu
        velit. Duis varius tortor ut fringilla facilisis. Fusce sagittis mauris eu eros
        venenatis, non tincidunt urna elementum.
      </p>
    </div>
  );
}
export default AboutPage