import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//import Home from "./Layout/Home";
import CategoryList from "./Features/Category/CategoryList";
import MemberList from "./Features/Member/MemberList";
import BookList from "./Features/Books/BookList";
import BookIssueList from "./Features/BookIssue/BookIssueList"
import Sidebar from "./Layout/SideBar/Index";
import Dashboard from "Layout/DashBoard/Index";


function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/bookissue" element={<BookIssueList/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;