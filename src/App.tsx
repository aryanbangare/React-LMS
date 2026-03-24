import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//import Home from "./Layout/Home";
import CategoryList from "./Features/Category/Index";
import MemberList from "./Features/Member/MemberList";
import BookList from "./Features/Books/pages/List";
import BookIssueList from "./Features/BookIssue/";
import Dashboard from "Layout/DashBoard/Index";
import Mainlayout from "Layout/mainlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/members" element={<MemberList />} />
          <Route path="/categories/*" element={<CategoryList />} />
          <Route path="/bookissue/*" element={<BookIssueList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
