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

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
