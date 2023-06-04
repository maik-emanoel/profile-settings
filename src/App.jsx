import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import PersonalData from "./pages/PersonalData/PersonalData";
import LoginInfo from "./pages/LoginInfo/LoginInfo";
import Accessibility from "./pages/Accessibility/Accessibility";
import Notifications from "./pages/Notifications/Notifications";
import LinkedDevices from "./pages/LinkedDevices/LinkedDevices"
import LinkedAccounts from "./pages/LinkedAccounts/LinkedAccounts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-data" element={<PersonalData />} />
        <Route path="/login-info" element={<LoginInfo />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/linked-devices" element={<LinkedDevices />} />
        <Route path="/linked-accounts" element={<LinkedAccounts />} />
      </Routes>
    </Router>
  )
}
