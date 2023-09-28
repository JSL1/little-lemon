/*
 
  Author: Jeremy St. Pierre

*/
import './css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />        
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
