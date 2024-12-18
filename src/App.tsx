import './styles/global.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
// import Budgets from "./pages/Budgets";
// import Transactions from "./pages/Transactions";
// import Dashboard from "./layouts/DashboardLayout";
// import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <div className="main">
      <div className="allContainer">
        <div className="contentContainer">
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              {/* <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route> */}
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;