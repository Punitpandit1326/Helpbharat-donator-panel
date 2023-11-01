import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navigation from './component/Navigation/Navbar';
import Myprofile from './pages/Myprofile/Myprofile';
import Myfundraiser from './pages/Myfundraiser/Myfundraiser';
import MyDonation from './pages/MyDonation/MyDonation';
import MyComments from './pages/MyComments/MyComments';
import DonationTab from './pages/DonationTab/DonationTab';
import EditDonationTab from './pages/EditDonationTab/EditDonationTab';
import DashBoard from './pages/dashboard/DashBoard';
import DonationDb from './pages/donationdb/DonationDb';
import PromotePage from './pages/promotePage/PromotePage';
import Setting from './pages/settings/Setting';
import MyWithdraw from './pages/mywithdraw/MyWithdraw';
import Login from './pages/auth/Login';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { useState, useContext, createContext } from 'react';
import Cookies from 'universal-cookie';
import Fundraiser from './pages/StartFundraiser/Fundraiser'
import CreateFund from './pages/StartFundraiser/CreateFundraiser/CreateFund';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext)
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    const cookie = new Cookies();
    cookie.remove('token_web');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {<BrowserRouter>
        <Navigation />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Myprofile />} />
          <Route path='myprofile' element={<Myprofile />} />
          <Route path='myfundraiser' element={<Myfundraiser />} />
          <Route path='fundraiser' element={<Fundraiser />} />
          <Route path='fundraiser/createfund/:slug' element={<CreateFund />} />
          <Route path='mydonation/' element={<MyDonation />} />
          <Route path='mycomments' element={<MyComments />} />
          <Route path='/myfundraiser/donationtab/:slug' element={<DonationTab />} />
          <Route path='editdonationtab/:slug' element={<EditDonationTab />} />
          <Route path='/myfundraiser/dashboard/:_id' element={<DashBoard />} />
          <Route path='/donationdb/:_id' element={<DonationDb />} />
          <Route path='promotepage/:_id' element={<PromotePage />} />
          <Route path='mywithdraw/:_id' element={<MyWithdraw />} />
          <Route path='setting/:_id' element={<Setting />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </BrowserRouter>}
    </AuthContext.Provider>

  );
}

export default App;
