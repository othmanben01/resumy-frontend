import { Routes, Route } from "react-router-dom";
import List from "../components/admin/profile/List";
import Edit from "../components/admin/profile/Edit";
import Create from "../components/admin/profile/Create";
import Delete from "../components/admin/profile/Delete";

const Admin = () => (
  <Routes>
    <Route path="/" element={<List />} />
    <Route path="profiles" element={<List />} />
    <Route path="profiles/edit/:id" element={<Edit />} />
    <Route path="profiles/create" element={<Create />} />
    <Route path="profiles/delete/:id" element={<Delete />} />
  </Routes>
);

export default Admin;
