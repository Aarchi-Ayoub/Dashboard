import React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput } from "react-admin";
const FilterPost = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </Filter>
  );
};

export default FilterPost;
