import Header from "./components/layout/Header/Header";
import GameGrid from "./components/common/GameGrid/GameGrid";
import Footer from "./components/layout/Footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { GenreProps } from "./types/Genres";
import GenreList from "./components/common/GenreList/GenreList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProps | null>(null);

  return (
    <>
      <div className={`main-container`}>
        <Header />
        <div className="content">
          <div>
            <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </div>
          <GameGrid selectedGenre={selectedGenre} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
