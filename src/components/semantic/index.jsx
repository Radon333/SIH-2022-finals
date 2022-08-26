import React from 'react';
import Iframe from 'react-iframe';

const Semantic = (props) => {
  return (
    <div style={{border:"1px solid black",width:"100%",height:"100%"}}>
      <Iframe url={props.url} width="100%" height="400px" />
    </div>
  );
};

export default Semantic;
