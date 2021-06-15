import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  SimpleList,
  EditButton,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import FilterPost from "./FilterPost";
const ListPost = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={<FilterPost />} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
      {/* <Datagrid rowClick="edit">
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid> */}
    </List>
  );
};

export default ListPost;
