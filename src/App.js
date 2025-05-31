import Dashboard from "./components/Dashboard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationPanel from "./components/NotificationPanel";
import SettingsPanel from "./components/SettingsPanel";
import ServiceManager from "./components/ServiceManager";
import CabCategories from "./components/CabCategories";
import PickupDropPoints from "./components/PickupDropPoints";
import SideBar from "./components/SideBar";
import Accountant from "./components/Accountant";
import SupportPortal from "./components/SupportPortal";
import HRModule from "./components/HRModule";
import ContentManagement from "./components/ContentManagement";
import CabInventory from "./components/CabInventory";
import Vendors from "./components/Vendors";
import Drivers from "./components/Drivers";
import TrainSchedule from "./components/TrainSchedule";
import SupportTickets from "./components/SupportTickets";
import LiveChats from "./components/LiveChats";
import BalanceSheet from "./components/BalanceSheet";
import FinanceDashboard from "./components/FinanceDashboard";
import GeneralInvoice from "./components/GeneralInvoice";
import SignIn from "./components/SignIn";
import MemosNotices from "./components/MemosNotices";
import FAQManagement from "./components/FAQManagement";
import MediaEvents from "./components/MediaEvents";
import InvoiceForm from "./components/InvoiceForm";
import Profile from "./components/Profile";
import EmployeeManagement from "./components/EmployeeManagement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/notification" element={<NotificationPanel />} />
        <Route path="/settingspanel" element={<SettingsPanel />} />
        <Route path="/service-manager" element={<ServiceManager />} />
        <Route path="/cab-categories" element={<CabCategories />} />
        <Route path="/pickup-drop" element={<PickupDropPoints />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/accountant" element={<Accountant />} />
        <Route path="/support-portal" element={<SupportPortal />} />
        <Route path="/hr-module" element={<HRModule />} />
        <Route path="/content-management" element={<ContentManagement />} />
        <Route path="/inventory" element={<CabInventory />} />
        <Route path="/vendor" element={<Vendors />} />
        <Route path="/driver" element={<Drivers />} />
        <Route path="/train-schedule" element={<TrainSchedule />} />
        <Route path="/support-tickets" element={<SupportTickets />} />
        <Route path="/live-charts" element={<LiveChats />} />
        <Route path="/balance-sheet" element={<BalanceSheet />} />
        <Route path="/finacial-report" element={<FinanceDashboard />} />
        <Route path="/general-invoice" element={<GeneralInvoice />} />
        <Route path="/employee-management" element={<EmployeeManagement />} />
        <Route path="/memo-notices" element={<MemosNotices />} />
        <Route path="/FAQ" element={<FAQManagement />} />
        <Route path="/media-events" element={<MediaEvents />} />
        <Route path="/invoice" element={<InvoiceForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
