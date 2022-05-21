import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Detail from './views/Detail/Detail';
import EditDetail from './views/Detail/EditDetail';
import CreateDrawing from './views/Create/CreateDrawing';
import Home from './views/Home/Home';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Switch>
        <Route path="/drawings/create">
          <CreateDrawing />
        </Route>
        <Route path="/drawings/:id/edit">
          <EditDetail />
        </Route>
        <Route path="/drawings/:id">
          <Detail />
        </Route>
        <Route path="/drawings">
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Redirect to="/drawings" />
        </Route>
      </Switch>
    </>
  );
}
