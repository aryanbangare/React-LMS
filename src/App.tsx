import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Layout/Home";
import CategoryList from "./Features/Category/CategoryList";
import MemberList from "./Features/Member/MemberList";
import BookList from "./Features/Books/BookList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CategoryList" element={<CategoryList />} />
          <Route path="/MemberList" element={<MemberList />} />
          <Route path="/BookList" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
