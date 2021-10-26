import { Button } from "@material-ui/core";
import { node } from "prop-types";

export default function MenuItem({ children }) {
  return <Button color="inherit">Ma liste</Button>;
}

MenuItem.propTypes = {
  children: node,
};
