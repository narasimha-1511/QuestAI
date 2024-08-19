import "./App.css";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import ProjectDashboard from "./pages/project-dashboard";
import SettingsPage from "./pages/settings-page";
import Crazy from "./components/shared/Crazy";
import AddYourPodcast from "./pages/add-your-podcast";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDashboard />}>
          <Route path="/project/:id/add-podcast" element={<AddYourPodcast />} />
          <Route path="/project/:id/podcast-widget" element={<Crazy />} />
          <Route path="/project/:id/create-podcast" element={<Crazy />} />
          <Route path="/project/:id/help" element={<Crazy />} />
          <Route path="/project/:id/settings" element={<SettingsPage />} />
          <Route path="/project/:id/upgrade" element={<Crazy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
