import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Post : {record ? `${record.title}` : ""}</span>;
};
const EditPost = (props) => {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        {/* <TextInput source="id" /> */}
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};

export default EditPost;
