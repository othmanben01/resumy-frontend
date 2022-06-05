import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

const Dashboard = () => (
  <Admin dataProvider={restProvider("http://localhost:8000/api/admin/posts/")}>
    {/* <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      /> */}
  </Admin>
);

export default Dashboard;
