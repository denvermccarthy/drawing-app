import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Detail from './views/Detail/Detail';
import EditDetail from './views/Detail/EditDetail';
import CreateDrawing from './views/Create/CreateDrawing';
import Home from './views/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Switch>
        <PrivateRoute path="/drawings/create">
          <CreateDrawing />
        </PrivateRoute>
        <PrivateRoute path="/drawings/:id/edit">
          <EditDetail />
        </PrivateRoute>
        <PrivateRoute path="/drawings/:id">
          <Detail />
        </PrivateRoute>
        <PrivateRoute path="/drawings">
          <Home />
        </PrivateRoute>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/">
          <Redirect to="/drawings" />
        </PrivateRoute>
      </Switch>
    </>
  );
}
