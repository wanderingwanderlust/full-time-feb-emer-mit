import logo from './logo.svg';
import {Button} from 'react-bootstrap';
import Navi from './components/partials/navi';
import ToDoClass from './components/partials/todo/ToDoClass';
import ToDoHooks from './components/partials/todo/ToDoHooks';
import GifSearch from './components/gifs/GifSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      {/* <ToDoClass></ToDoClass> */}
      {/* <ToDoHooks></ToDoHooks> */}
      <GifSearch />
    </div>
  );
}

export default App;
