import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//@ts-ignore
import HomePage from './pages/HomePage/HomePage.tsx';
//@ts-ignore
import Header from './components/Header/Header.tsx';
//@ts-ignore
import Footer from './components/Footer/Footer.tsx';
//@ts-ignore
import Detail from './components/Contents/Detail/Detail.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
