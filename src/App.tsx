import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import TodayPage from "./pages/today/TodayPage";

// import { useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  // console.log(`location => ${location.pathname}`);
  return (
    <div className="App">
      <Header
        children={
          <Routes>
            <Route path="/" element={<div>'/' ={">"} page</div>} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/yesterday" element={<div>Yesterday</div>} />
            <Route path="/tomorrow" element={<div>Tomorrow</div>} />
            <Route path="/hourly" element={<div>Hourly</div>} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
