import { node } from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeOutlined, SearchOutlined, ListOutlined } from "@material-ui/icons";
import { homePath, myListPath, searchPath } from "../../routes";

import MenuItem from "../MenuItem";
import Separator from "../Separator";

export default function BaseLayout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mega Movies</Typography>
          <MenuItem startIcon={<HomeOutlined />} to={homePath}>
            Acceuil
          </MenuItem>
          <MenuItem startIcon={<SearchOutlined />} to={searchPath}>
            Recherche
          </MenuItem>
          <MenuItem startIcon={<ListOutlined />} to={myListPath}>
            Ma liste
          </MenuItem>
          <Separator />
          <MenuItem to="/">Login</MenuItem>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

BaseLayout.propTypes = {
  children: node,
};
