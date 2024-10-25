import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import GameGrid from "./components/common/GameGrid/GameGrid";
import Footer from "./components/layout/Footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <div
        className={`main-container`}
      >
        <Header />
        <div className="content">
          <Sidebar />
          <GameGrid />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
