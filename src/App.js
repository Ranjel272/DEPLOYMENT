import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAs from './components/LogINAs'; 
import Login from './components/login';
import Dashboard from './components/admin/dashboard';
import EmployeeRecords from './components/admin/employeeRecords';
import RoleManagement from './components/admin/roleManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAs />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/employeeRecords" element={<EmployeeRecords />} />
        <Route path="/admin/roleManagement" element={<RoleManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
