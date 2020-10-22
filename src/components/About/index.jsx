import React , {useState , useEffect} from 'react';
import Header from '../shared/Header';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const refreshPage = () =>  window.location.reload(false);

  useEffect(() => {
  axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(resp => setData(resp.data))
  }, []);
  return (
    <>
      {/* You need to use your shared header component... */}
      {/* You need a paragraph describing a fun fact about you */}
      <Header title="About Page"/>
      <div className='text-center my-3'>
        <button 
        className='text-center my-3' 
        onClick={refreshPage}
        >New funny fact</button>
      <p>{data.text}</p>
      </div>

    </>
  );
}

export default Home;