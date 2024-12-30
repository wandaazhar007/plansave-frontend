import './styles/global.scss';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import { NavbarProvider } from './context/NavbarContext';
import { SidebarProvider } from './context/SidebarContext';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Budgets from './pages/budgets/Budgets';
import Profile from './pages/profile/Profile';
import Transactions from './pages/transactions/Transactions';
import Savings from './pages/savings/Savings';

function App() {

  const MainLayout = () => {
    return (
      <NavbarProvider>
        <SidebarProvider>
          <div className="main">
            <Navbar />
            <div className="allContainer">
              <Sidebar />
              <div className="contentContainer">
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
        </SidebarProvider>
      </NavbarProvider>
    )
  }

  const AuthLayout = () => {
    return (
      <div className="authMain">
        <div className="authContainer">
          <Outlet />
          {/* <h1>test</h1> */}
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/budgets",
          element: <Budgets />
        },
        {
          path: "/transactions",
          element: <Transactions />
        },
        {
          path: "/savings",
          element: <Savings />
        }
      ]
    },
    {
      path: "/authentication",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />
        },
        {
          path: "register",
          element: <LoginPage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;