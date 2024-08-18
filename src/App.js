import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import NewUser from './components/NewUser'
import './App.css';

const App = ()=>(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/newUser" element={<NewUser/>}/>
  </Routes>
  </BrowserRouter>
)

export default App;
