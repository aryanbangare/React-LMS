import { Navigate, Route, Routes } from "react-router";

import Create from "./pages/create";
import List from "./pages/List";






export default function member() {
  return (
    <Routes>
      <Route index element={<Navigate to="list" />} />
      <Route path="list" element={<List />} />
      <Route path="create" element={<Create />} />
    </Routes>
  );
}