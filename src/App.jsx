import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Splash from './pages/Splash';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Order from './pages/Order';
import Tickets from './pages/Tickets';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/events' element={<Events />} />
      <Route path='/details' element={<EventDetails />} />
      <Route path='/order' element={<Order />} />
      <Route path='/tickets' element={<Tickets />} />
    </Routes>
   </Router>
  )
}

export default App
