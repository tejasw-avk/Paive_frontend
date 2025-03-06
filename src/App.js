import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
 
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
 
      <Footer></Footer>
    </div>
  );
}
 
export default App;