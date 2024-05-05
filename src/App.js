
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Dash2 from './components/Dash2';
import Navbar2 from './components/Navbar2';
// import Home5 from './components/Home5';
// import Home6 from './components/Home6';
import Cards from './components/Cards';

import DataView from './components/DataView';
import Login1 from './components/Login1';
import Orderthankyou from './components/Orderthankyou';
import Offers from './components/Offers';

import TableBooking from './components/TableBooking';
import ContactUs from './components/ContactUs';
import OrderForm from './components/OrderForm';
import Feedback from './components/Feedback';
import ViewBookedTables from './components/ViewBookedTables';

import Slideshow from './components/Slideshow';
import About from './components/About';




function App() {
  return (
    <div className="App">
      {/* <ContactUs/> */}
      {/* <TableBooking/> */}
      {/* <Orderthankyou/> */}
      {/* <DataView/> */}
      {/* <Dash2/> */}
      {/* <Signup/> */}
      {/* <Dashboard/> */}
      
      {/* <Offers/> */}
      {/* <Cards/> */}
      {/* <Navbar2/> */}
      {/* <Home5/> */}
      {/* <Login/> */}
      {/* <Feedback/> */}
      <Routes>
      <Route path='/' element={<><Dash2/></>}/> 
      <Route path='/Login' element={<><Login1/></>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Navbar2' element={<><Navbar2/><Slideshow/></>}/>
      <Route path='/Cards' element={<><Navbar2/><Cards/><DataView/></>}/>
      <Route path='/Signup' element={<Login/>}/>
      <Route path='/TableBooking' element={<><TableBooking/></>}/>
      <Route path='/DataView' element={<><DataView/></>}/>
      <Route path="/order/:itemId" element={<OrderForm />} />
      <Route path='/Feedback' element={<><Feedback/></>}/>
      <Route path='/Orderthankyou' element={<><Orderthankyou/></>}/>
      <Route path='/view-bookings' element={<><ViewBookedTables/></>}/>
      <Route path='/About' element={<><About/></>}/>
      {/* <Route path='/Navbar2' element={<><Navbar2/></>}/> */}
      
    </Routes>
    
    {/* <ViewBookedTables/> */}
    </div>
  );
}

export default App;
