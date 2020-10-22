import React from 'react';
import Header from '../shared/Header';

const Home = () => {
  //const [data, setData] = useState([]);
  return (
    <>
      {/* You need to use your shared header component... */}
      {/* You need a paragraph describing a fun fact about you */}
      <Header title="About Page"/>
      <p> Fun fact about me </p>

    </>
  );
}

export default Home;