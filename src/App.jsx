import { useEffect } from 'react';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';


const App = () => {

  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  })

  return (
    <div>
      <Login></Login>
      {/* <EmployeeDashboard></EmployeeDashboard> */}
      {/* <AdminDashboard></AdminDashboard> */}
    </div>
  );
};

export default App;
