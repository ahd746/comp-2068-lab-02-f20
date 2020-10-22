import React from 'react';

// You need to import your shared header...
import Header  from "../shared/Header";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="Home Page"/>
      {/* You need a link to your about page as a call to action */}
      <button className="mx-5 my-3">
        <Link className = "btn" to= "/about"> Vist the about page to know a funny fact</Link>
      </button>
    </>
  );
}
export default Home;