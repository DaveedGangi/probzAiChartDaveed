import {Route, Switch} from'react-router-dom';

import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
     <Switch>
      <Route path='/' component={Home} />

     </Switch>
     
    </div>
  );
}

export default App;
