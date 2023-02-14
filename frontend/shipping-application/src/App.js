import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";

const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/register' element= {<Register />} />
          <Route path='/home' element= {
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
