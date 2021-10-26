import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { homePath, myListPath, searchPath } from "../routes";

import HomePage from "../home/HomePage";
import SearchPage from "../search/SearchPage";
import MyListPage from "../my-list/MyList";
import theme from "../ds/theme";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path={homePath}>
            <HomePage />
          </Route>
        </Switch>
        <Route path={searchPath}>
          <SearchPage />
        </Route>
        <Route path={myListPath}>
          <MyListPage />
        </Route>
      </ThemeProvider>
    </BrowserRouter>
  );
}
