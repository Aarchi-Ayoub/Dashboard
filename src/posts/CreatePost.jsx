import React from "react";
import {
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
} from "react-admin";
const CreatePost = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Create>
  );
};

export default CreatePost;
