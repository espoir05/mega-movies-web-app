import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/my-list">
          <MyListPage />
        </Route>
      </ThemeProvider>
    </BrowserRouter>
  );
}
