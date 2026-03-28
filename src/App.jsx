import { useState } from "react";
import AuthPage from "./components/AuthPage";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("staff");

  if (!isAuthenticated) {
    return <AuthPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Navbar activeItem={activePage} onNavChange={setActivePage} />
      <Dashboard activePage={activePage} />
    </div>
  );
}

export default App;
