import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { homePath, myListPath, searchPath } from "../routes";
import { Provider as ReactProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query;";

import HomePage from "../home/HomePage";
import SearchPage from "../search/SearchPage";
import MyListPage from "../my-list/MyList";
import theme from "../ds/theme";
import store from "./store";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactProvider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Switch>
                <Route exact path={homePath}>
                  <HomePage />
                </Route>
                <Route path={searchPath}>
                  <SearchPage />
                </Route>
                <Route path={myListPath}>
                  <MyListPage />
                </Route>
              </Switch>
            </ThemeProvider>
          </BrowserRouter>
        </ReactProvider>
      </QueryClientProvider>
    </>
  );
}
