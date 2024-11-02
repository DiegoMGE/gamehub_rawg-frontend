import { useState } from "react";

import Header from "./components/layout/Header/Header";
import GameGrid from "./components/common/GameGrid/GameGrid";
import Footer from "./components/layout/Footer/Footer";
import GenreList from "./components/common/GenreList/GenreList";
import PlatformSelector from "./components/common/PlatformSelector/PlatformSelector";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { GameQuery } from "./types/GameQuery";
import SortSelector from "./components/common/SortSelector/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className={`main-container`}>
        <Header />
        <div className="content">
          <div>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </div>
          <div>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}/>
              <SortSelector />
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
