import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ProfileList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="first_name" />
        <TextField source="last_name" />
      </Datagrid>
    </List>
  );
};

export default ProfileList;
