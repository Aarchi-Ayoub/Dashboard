import React from "react";

import { Admin, Resource } from "react-admin";

import jsonServerProvider from "ra-data-json-server";

import ListUser from "./users/ListUser";

import ListPost from "./posts/ListPost";
import EditPost from "./posts/EditPost";
import CreatePost from "./posts/CreatePost";

import Dashboard from "./pages/Dashboard";

import AuthProvider from "./auth/AuthProvider";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

const App = () => {
  const dataProvider = jsonServerProvider(
    "http://jsonplaceholder.typicode.com"
  );
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={AuthProvider}
    >
      <Resource
        name="posts"
        list={ListPost}
        edit={EditPost}
        create={CreatePost}
        icon={PostIcon}
      />
      <Resource name="users" list={ListUser} icon={UserIcon} />
    </Admin>
  );
};

export default App;
