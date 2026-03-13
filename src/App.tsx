import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import CategoryList from "./Component/CategoryList";
import MemberList from "./Component/MemberList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CategoryList" element={<CategoryList />} />
          <Route path="/MemberList" element={<MemberList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
