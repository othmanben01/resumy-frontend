import { Routes, Route } from "react-router-dom";

import ProfileList from "../components/admin/profile/List";
import ProfileEdit from "../components/admin/profile/Edit";
import ProfileCreate from "../components/admin/profile/Create";
import ProfileDelete from "../components/admin/profile/Delete";

import EducationList from "../components/admin/education/List";
import EducationEdit from "../components/admin/education/Edit";
import EducationCreate from "../components/admin/education/Create";
import EducationDelete from "../components/admin/education/Delete";

import EmploymentList from "../components/admin/employment/List";
import EmploymentEdit from "../components/admin/employment/Edit";
import EmploymentCreate from "../components/admin/employment/Create";
import EmploymentDelete from "../components/admin/employment/Delete";

import ProjectList from "../components/admin/project/List";
import ProjectEdit from "../components/admin/project/Edit";
import ProjectCreate from "../components/admin/project/Create";
import ProjectDelete from "../components/admin/project/Delete";

const Admin = () => (
  <Routes>
    <Route path="/" element={<ProfileList />} />
    {/* Profiles */}
    <Route path="profiles/" element={<ProfileList />} />
    <Route path="profiles/:id/edit" element={<ProfileEdit />} />
    <Route path="profiles/create" element={<ProfileCreate />} />
    <Route path="profiles/:id/delete" element={<ProfileDelete />} />
    {/* Educations */}
    <Route path="educations/" element={<EducationList />} />
    <Route path="educations/:id/edit" element={<EducationEdit />} />
    <Route path="educations/create" element={<EducationCreate />} />
    <Route path="educations/:id/delete" element={<EducationDelete />} />
    {/* Employment */}
    <Route path="employments/" element={<EmploymentList />} />
    <Route path="employments/:id/edit" element={<EmploymentEdit />} />
    <Route path="employments/create" element={<EmploymentCreate />} />
    <Route path="employments/:id/delete" element={<EmploymentDelete />} />

    {/* project */}
    <Route path="projects/" element={<ProjectList />} />
    <Route path="projects/:id/edit" element={<ProjectEdit />} />
    <Route path="projects/create" element={<ProjectCreate />} />
    <Route path="projects/:id/delete" element={<ProjectDelete />} />
  </Routes>
);

export default Admin;
