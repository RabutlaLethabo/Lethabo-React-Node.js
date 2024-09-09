import NavBar from "./components/NavBar"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import UsersPage from "./Pages/UsersPage";
import ManagersPage from "./Pages/ManagersPage";
import AddPage from "./Pages/AddPage";
import AddEmployee from "./Pages/AddEmployee";
import AddManager from "./Pages/AddManager";
import UpdateEmployeePage from "./Pages/UpdateEmployeePage";
import DeleteEmployeePage from "./Pages/DeleteEmployeePage";
import UpdateManagerPage from "./Pages/UpdateManagerPage";
import DeleteManagerPage from "./Pages/DeleteManagerPage";
import './index.css';

function App() {

  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/managers" element={<ManagersPage />} />
          <Route path="/add" element={<AddPage/>}/>
          <Route path="/add_employee" element={<AddEmployee/>}/>
          <Route path="/add_manager" element={<AddManager/>}/>
          <Route path="/update_employee" element={<UpdateEmployeePage />} />
          <Route path="/delete_employee" element={<DeleteEmployeePage />} />
          <Route path="/update_manager" element={<UpdateManagerPage />} />
          <Route path="/delete_manager" element={<DeleteManagerPage />} />
        </Routes>
    </Router>
  )
}

export default App
