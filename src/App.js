import { BrowserRouter, Route, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavComponent from './NavComponent';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import FeedbackForm from './components/FeedbackForm';
import RightAlignedForm from './components/RightAlignedForm';
import './components/Style.css'


const App = () => {
  return (
    <BrowserRouter>
    <NavComponent /> 
  

   
    
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
