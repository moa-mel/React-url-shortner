import './App.css';
import './Details.css'
import Banner from './components/Banner';
import Main from './components/Main';
import Medium from './components/Medium';
import Footer from './components/Footer';

function Detail() {
  return (
    <div className='detail'>
       <Banner/>
       <Main/>
       <Medium/>
        <Footer/>
    </div>
  );
}

export default Detail;