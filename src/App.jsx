import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import DynamicPage from "./page/DynamicPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AppTreatise" element={<HomePage />} />
        <Route
          path="/post/:postId"
          element={
            <div className="bg-gray-800 pt-20 h-full">
              <DynamicPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
