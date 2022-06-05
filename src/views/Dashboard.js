import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import ProfileList from "../components/dashboard/ProfileList";

const Dashboard = () => (
  <Admin dataProvider={restProvider("http://localhost:8000/api/profiles/")}>
    <Resource
      name="profiles"
      list={ProfileList}
      // create={PostCreate}
      // edit={PostEdit}
    />
  </Admin>
);

export default Dashboard;
