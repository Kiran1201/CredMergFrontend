
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import ViewEmployees from './component/employee/ViewEmployees';
import Sidebar from './layout/Sidebar';
import AddEmployee from './component/employee/AddEmployee';
import ViewVendors from './component/vendor/ViewVendors';
import AddVendor from './component/vendor/AddVendor';
import SendEmail from './component/email/SendEmail';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="d-flex">
          <Sidebar />
          <div className="container mt-3">
            <Routes>
              <Route exact path='/view-employees' element={<ViewEmployees />} />
              <Route exact path='/add-employee' element={<AddEmployee />} />
              <Route exact path='/view-vendors' element={<ViewVendors />} />
              <Route exact path='/add-vendor' element={<AddVendor />} />
              <Route exact path='/send-email' element={<SendEmail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
