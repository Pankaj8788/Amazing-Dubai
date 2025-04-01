
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// import Sidebar from "./components/Dashboard/Sidebar";
// import Login from "./components/Login/login";
// import Dashboard from "./components/Dashboard/dashboard"; // Import Dashboard component
// import LeaderBoard from "./components/Admin/LeaderBoard";
// import UsersList from "./components/Admin/UsersList";
// import Rewards from "./components/Admin/Rewards";
// import InvestmentPlan from "./components/Admin/InvestmentPlan";
// import TargetSetting from "./components/Admin/TargetSetting";
// import ForgetPassword from "./components/Login/ForgetPassword";
// import CreateUser from "./components/User/CreateUser";
// import MpinSetting from "./components/Dashboard/MpinSetting";
// import TransferCoins from "./components/Admin/TransferCoins";
// import UserDashboard from "./components/User/UserDashboard";
// import LandingPage from "./components/Website/LandingPage";
// import HeroSection from "./components/Website/Home";
// import CoinSetting from "./components/Setting/CoinSetting";
// import UserProfile from "./components/Dashboard/UserProfile";
// import AdminReport from './components/Reports/AdminReport';
// import UserReport from "./components/Reports/UserReport";
// import Loader from "./components/Setting/Loader";
// import UserRegister from "./components/PassEvent/UserRegister";
// import EventPass from "./components/PassEvent/EventPass";
// import EventUsers from "./components/PassEvent/EventUsers";
// import BarcodeScanner from "./components/PassEvent/BarcodeScanner";
// import CustomCursor from "./components/Website/CustomCursor";
// import InactivityHandler from "./components/Setting/InactivityHandler";
// // Simulate authentication check
// const isAuthenticated = () => {
//   return !!localStorage.getItem("authToken"); // Check if auth token exists
// };

// // Protected Route component
// function ProtectedRoute({ element, ...rest }) {
//   return isAuthenticated() ? element : <Navigate to="/" replace={true} />;
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const location = useLocation();

//   // Exclude Sidebar for specific routes
//   const excludeSidebarRoutes = [
//     "/",
//     "/forgot-password",
//     "/createuser",
//     "/home",
//     "/landingpage",
//     "/login",
//     "/prelaunchevent/register",
//     // "/prelaunchevent/eventpass",
//   ];
//   const isSidebarVisible = !excludeSidebarRoutes.includes(location.pathname);

//   return (
//     <div style={{ display: "flex" }}>
//       {/* Conditionally render Sidebar */}
//       {isSidebarVisible && <Sidebar />}

//       {/* Main Content Area */}
//       <div style={{ flexGrow: 1, padding: "0px" }}>
//        <CustomCursor/>
//        <InactivityHandler timeout={1* 60 * 1000}> {/* 5 minutes timeout */}
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot-password" element={<ForgetPassword />} />
//           <Route path="/createuser" element={<CreateUser />} />
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/home" element={<HeroSection />} />
//           <Route path="/prelaunchevent/register" element={<UserRegister/>}/>

//           {/* Protected Routes */}
//           <Route 
//             path="/admin/eventusers"
//             element={<ProtectedRoute element={<EventUsers />} />}
//           />
//           <Route path="/prelaunchevent/eventpass"
//           element={<ProtectedRoute element={<EventPass  />} />}
//           /> 
//           <Route
//             path="/prelaunchedevent/passscanner"
//             element={<ProtectedRoute element={<BarcodeScanner />} />}
//           />          

//           <Route
//             path="/dashboard"
//             element={<ProtectedRoute element={<Dashboard />} />}
//           />
//           <Route
//             path="/leaderboard"
//             element={<ProtectedRoute element={<LeaderBoard />} />}
//           />
//           <Route
//             path="/userslist"
//             element={<ProtectedRoute element={<UsersList />} />}
//           />
//           <Route
//             path="/rewards"
//             element={<ProtectedRoute element={<Rewards />} />}
//           />
//           <Route
//             path="/investmentplan"
//             element={<ProtectedRoute element={<InvestmentPlan />} />}
//           />
//           <Route
//             path="/targetsetting"
//             element={<ProtectedRoute element={<TargetSetting />} />}
//           />
//           <Route
//             path="/adduser"
//             element={<ProtectedRoute element={<CreateUser />} />}
//           />
//           <Route
//             path="/mpinsetting"
//             element={<ProtectedRoute element={<MpinSetting />} />}
//           />

//           <Route
//             path="/transfercoins"
//             element={<ProtectedRoute element={<TransferCoins />} />}
//           />

//           <Route
//             path="/userdashboard"
//             element={<ProtectedRoute element={<UserDashboard />} />}
//           />
//           <Route
//             path="/coinsetting"
//             element={<ProtectedRoute element={<CoinSetting />} />}
//           />
//           <Route 
//             path="/userprofile"
//             element={<ProtectedRoute element={<UserProfile />} />}
//           />
//           <Route
//           path="/adminreport"
//           element={<ProtectedRoute element={<AdminReport />} />}
//           />

//           <Route path='targetsetting' element={TargetSetting} />
//           <Route
//          path="/userreport"
//          element={<ProtectedRoute element={<UserReport/>} />}
//           />

//           <Route path="/loader" element={Loader}/>

//           {/* Redirect undefined routes to login */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         </InactivityHandler>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Dashboard/Sidebar";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard"; // Import Dashboard component
import LeaderBoard from "./components/Admin/LeaderBoard";
import UsersList from "./components/Admin/UsersList";
import Rewards from "./components/Admin/Rewards";
import InvestmentPlan from "./components/Admin/InvestmentPlan";
import TargetSetting from "./components/Admin/TargetSetting";
import ForgetPassword from "./components/Login/ForgetPassword";
import CreateUser from "./components/User/CreateUser";
import MpinSetting from "./components/Dashboard/MpinSetting";
import TransferCoins from "./components/Admin/TransferCoins";
import UserDashboard from "./components/User/UserDashboard";
import LandingPage from "./components/Website/LandingPage";
import HeroSection from "./components/Website/Home";
import CoinSetting from "./components/Setting/CoinSetting";
import UserProfile from "./components/Dashboard/UserProfile";
import AdminReport from './components/Reports/AdminReport';
import UserReport from "./components/Reports/UserReport";
import Loader from "./components/Setting/Loader";
import UserRegister from "./components/PassEvent/UserRegister";
import EventPass from "./components/PassEvent/EventPass";
import EventUsers from "./components/PassEvent/EventUsers";
import BarcodeScanner from "./components/PassEvent/BarcodeScanner";
// import CustomCursor from "./components/Website/CustomCursor";
import InactivityHandler from "./components/Setting/InactivityHandler";
import DeletedUser from "./components/Admin/DeletedUser";
import GiftCard from "./components/Setting/GiftCardGC";
import GiftCard2 from "./components/Setting/GiftCard2";
import Testing from "./components/Testing/Testing";
import GiftcardList from "./components/Setting/GiftcardList";
import ReedeemGiftcard from "./components/Admin/ReedeemGiftcard";

// Simulate authentication check
const isAuthenticated = () => {
  return !!localStorage.getItem("authToken"); // Check if auth token exists
};

// Protected Route component
function ProtectedRoute({ element, ...rest }) {
  return isAuthenticated() ? element : <Navigate to="/" replace={true} />;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Exclude Sidebar for specific routes
  const excludeSidebarRoutes = [
    "/",
    "/forgot-password",
    "/createuser",
    "/home",
    "/landingpage",
    "/login",
    "/prelaunchevent/register",
  ];
  const isSidebarVisible = !excludeSidebarRoutes.includes(location.pathname);

  // Define the routes where InactivityHandler should be applied (protected routes)
  const isProtectedRoute = !excludeSidebarRoutes.includes(location.pathname) && location.pathname !== "/";

  return (
    <div style={{ display: "flex" }}>
      {/* Conditionally render Sidebar */}
      {isSidebarVisible && <Sidebar />}

      {/* Main Content Area */}
      <div style={{ flexGrow: 1, padding: "0px" }}>
        {/* <CustomCursor /> */}

        {/* Apply InactivityHandler only on protected routes (exclude "/" for LandingPage) */}
        {isProtectedRoute && (
          <InactivityHandler timeout={35 * 60 * 1000}> {/* 1 minute timeout */}
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route path="/createuser" element={<CreateUser />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HeroSection />} />
              <Route path="/prelaunchevent/register" element={<UserRegister />} />

              {/* Protected Routes */}
              <Route
                path="/admin/eventusers"
                element={<ProtectedRoute element={<EventUsers />} />}
              />
              <Route
                path="/prelaunchevent/eventpass"
                element={<ProtectedRoute element={<EventPass />} />}
              />
              <Route
                path="/prelaunchedevent/passscanner"
                element={<ProtectedRoute element={<BarcodeScanner />} />}
              />
              <Route
                path="/dashboard"
                element={<ProtectedRoute element={<Dashboard />} />}
              />
              <Route
                path="/leaderboard"
                element={<ProtectedRoute element={<LeaderBoard />} />}
              />
              <Route
                path="/testingc"
                element={<ProtectedRoute element={<Testing />} />}
              />
              <Route
                path="/giftcard"
                element={<ProtectedRoute element={<GiftCard />} />}
              />
              <Route
                path="/giftcardtwo"
                element={<ProtectedRoute element={<GiftCard2 />} />}
              />
              <Route
              path="/giftcardlist"
              element={<ProtectedRoute element={<GiftcardList />} />}
              />
              <Route
                path="/giftcard-reedim"
                element={<ProtectedRoute element={<ReedeemGiftcard />} />}
              />
              <Route
                path="/admin/userslist"
                element={<ProtectedRoute element={<UsersList />} />}
              />
              <Route
                path="/admin/deleteduser"
                element={<ProtectedRoute element={<DeletedUser />} />}
              />
              <Route
                path="/rewards"
                element={<ProtectedRoute element={<Rewards />} />}
              />
              <Route
                path="/investmentplan"
                element={<ProtectedRoute element={<InvestmentPlan />} />}
              />
              <Route
                path="/targetsetting"
                element={<ProtectedRoute element={<TargetSetting />} />}
              />
              <Route
                path="/adduser"
                element={<ProtectedRoute element={<CreateUser />} />}
              />
              <Route
                path="/mpinsetting"
                element={<ProtectedRoute element={<MpinSetting />} />}
              />
              <Route
                path="/transfercoins"
                element={<ProtectedRoute element={<TransferCoins />} />}
              />
              <Route
                path="/userdashboard"
                element={<ProtectedRoute element={<UserDashboard />} />}
              />
              <Route
                path="/coinsetting"
                element={<ProtectedRoute element={<CoinSetting />} />}
              />
              <Route
                path="/userprofile"
                element={<ProtectedRoute element={<UserProfile />} />}
              />
              <Route
                path="/adminreport"
                element={<ProtectedRoute element={<AdminReport />} />}
              />
              <Route
                path="/userreport"
                element={<ProtectedRoute element={<UserReport />} />}
              />
              <Route path="/loader" element={<Loader />} />
              {/* Redirect undefined routes to login */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </InactivityHandler>
        )}

        {/* For Public Routes, render Routes without InactivityHandler */}
        {!isProtectedRoute && (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HeroSection />} />
            <Route path="/prelaunchevent/register" element={<UserRegister />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
