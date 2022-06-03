import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Navigate,
} from "react-router-dom";

//@ts-ignore
import HomePage from "./pages/HomePage/HomePage.tsx";
//@ts-ignore
import Header from "./components/Header/Header.tsx";
//@ts-ignore
import Footer from "./components/Footer/Footer.tsx";
//@ts-ignore
import Detail from "./pages/Detail/Detail.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
//@ts-ignore
import WatchFilm from "./pages/WatchFilm/WatchFilm.tsx";
//@ts-ignore
import ListFilm from "./pages/ListFilm/ListFilm.tsx";
//@ts-ignore
import TrendingList from "./pages/TrendingList/TrendingList.tsx";
import PopularList from "./pages/PopularList/PopularList.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import { useState } from "react";
import Layout from "./components/Layout/Layout.tsx";
import Admin from "./pages/Admin/Admin.tsx";
function App() {
  const [active, setState] = useState<string>("");
  return (
    <div className="App">
      <Router>
        < >
          <Routes>
           <Route path="/" element={
            <>
              <HomePage />
            </>}></Route>
            <Route path="/detail" element={<Layout>
              <Detail />
            </Layout>}></Route>
            <Route path="/watch" element={<Layout><WatchFilm /></Layout>} />
            <Route path="/watch/:id" element={<Layout></Layout>} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/listfilm" element={<ListFilm />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/trending" element={<TrendingList />}></Route>
            <Route path="/popular" element={<PopularList />}></Route>
            <Route path="/login" element={<Login />}></Route>
           <Route path="/admin" element={<><Admin /></>}></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
