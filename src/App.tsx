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
import ListFilm from "./pages/ListFilm/ListFilm.tsx";
import TrendingList from "./pages/TrendingList/TrendingList.tsx";
import PopularList from "./pages/PopularList/PopularList.tsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/watch" element={<WatchFilm />} />
          <Route path="/watch/:id" element={<WatchFilm />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/listfilm" element={<ListFilm/>}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/trending" element={<TrendingList />}></Route>
          <Route path="/popular" element={<PopularList />}></Route>
        </Routes>
        <Footer></Footer>

      </Router>
      
    </div>
  );
}

export default App;
