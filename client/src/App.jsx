import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Form } from "./Components";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/newJob">
              <Form />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
