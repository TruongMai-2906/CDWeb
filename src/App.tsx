import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

//@ts-ignore
import HomePage from './pages/HomePage/HomePage.tsx';
//@ts-ignore
import Header from './components/Header/Header.tsx';
//@ts-ignore
import Footer from './components/Footer/Footer.tsx';
//@ts-ignore
import Detail from './pages/Detail/Detail.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
//@ts-ignore
import WatchFilm from "./pages/WatchFilm/WatchFilm.tsx";
//@ts-ignore
import Register from "./pages/Register/Register.tsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/watch" element={<WatchFilm />} />
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer></Footer>

      </Router>
      
    </div>
  );
}

export default App;
