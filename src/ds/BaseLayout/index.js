import { node } from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeOutlined, SearchOutlined, ListOutlined } from "@material-ui/icons";
import { homePath, myListPath, searchPath } from "../../routes";
import { useLocation } from "react-router-dom";

import MenuItem from "../MenuItem";
import Separator from "../Separator";

export default function BaseLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mega Movies</Typography>
          <MenuItem
            startIcon={<HomeOutlined />}
            to={homePath}
            variant={pathname === homePath ? "current" : "default"}
          >
            Acceuil
          </MenuItem>
          <MenuItem
            startIcon={<SearchOutlined />}
            to={searchPath}
            variant={pathname === searchPath ? "current" : "default"}
          >
            Recherche
          </MenuItem>
          <MenuItem
            startIcon={<ListOutlined />}
            to={myListPath}
            variant={pathname === searchPath ? "current" : "default"}
          >
            Ma liste
          </MenuItem>
          <Separator />
          <MenuItem to="/login">Login</MenuItem>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

BaseLayout.propTypes = {
  children: node,
};
