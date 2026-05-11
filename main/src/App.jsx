import { BrowserRouter, Routes, Route } from "react-router-dom"
import MCO from "./pages/MCO/MCO"
import Activity1 from "./pages/Activity1/Activity1"
import Activity2 from "./pages/Activity2/Activity2"
import Activity3 from "./pages/Activity3/Activity3"
import Activity4 from "./pages/Activity4/Activity4"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MCO />} />
        <Route path="/activity1" element={<Activity1 />} />
        <Route path="/activity2" element={<Activity2 />} />
        <Route path="/activity3" element={<Activity3 />} />
        <Route path="/activity4" element={<Activity4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
