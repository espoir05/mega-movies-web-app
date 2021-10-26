import { BrowserRouter } from "react-router-dom";
import { HomeOutlined } from "@material-ui/icons";

import MenuItem from ".";
import { AppBar, Toolbar } from "@material-ui/core";

export default {
  component: MenuItem,
  title: "DesignSystem/Molecule.MenuItem",
  decorators: [
    (Story) => (
      <AppBar position="static">
        <Toolbar>
          <Story />
        </Toolbar>
      </AppBar>
    ),
  ],
};

export const Default = () => (
  <BrowserRouter>
    <MenuItem to="/">MENU 1</MenuItem>
  </BrowserRouter>
);

export const WithIcon = () => (
  <BrowserRouter>
    <MenuItem startIcon={<HomeOutlined />}>MENU 1</MenuItem>
  </BrowserRouter>
);

export const WithCurrentVariant = () => (
  <BrowserRouter>
    <MenuItem startIcon={<HomeOutlined />} variant="current">
      MENU 1
    </MenuItem>
  </BrowserRouter>
);
