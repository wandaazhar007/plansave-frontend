import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import Budgets from "./pages/Budgets";
// import Transactions from "./pages/Transactions";
// import Dashboard from "./layouts/DashboardLayout";
// import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;