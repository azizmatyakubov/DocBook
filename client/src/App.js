import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "react-calendar/dist/Calendar.css";

// Pages
import Home from './pages/Home';
import DoctorProfilePage from './pages/DoctorProfilePage';
import Dashboard from './pages/Dashboard';
import Slots from './pages/Slots';
import CalendarPage from './pages/CalendarPage';
import Login from './pages/Login';
// Components

//import PatientDashboard from './components/PatientDashboard/PatientDashboard';
import AppointmentsPage from './pages/AppointmentsPage';


function App() {
  return (
   <div className='app'>
    <Router>
   
      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/appointments" element={ <AppointmentsPage />} />
        {/* <Route path="/doctors" element={ <Doctors /> } /> */}
        <Route path="/doctor/" element={ <DoctorProfilePage /> } />
        <Route path="/doctor/:id" element={ <DoctorProfilePage /> } />
        <Route path="/calendar" element={ <CalendarPage /> } />
        <Route path="/slots" element={ <Slots /> } />
        {/* <Route path="/patient-dashboard" element={ <PatientDashboard /> } /> */}
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
