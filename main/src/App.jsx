import { BrowserRouter, Routes, Route } from "react-router-dom"
import Activity2 from "./pages/Activity2/Activity2"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activity2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
