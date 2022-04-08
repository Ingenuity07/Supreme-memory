import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbara'
import Home from './Home'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useState } from 'react';
function App() {
  const [editId,setEditId]=useState(null);
  return (
    <Router>
      <div className="App">
        <Navbar setEditId={setEditId}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create editId={editId} setEditId={setEditId} />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails setEditId={setEditId}/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
