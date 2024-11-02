import { Button, Image, ListGroup, Modal, Spinner } from "react-bootstrap";

import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/images-url";

import style from "./GenreList.module.css";
import { useEffect, useState } from "react";
import { GenreProps } from "@/types/Genres";

interface GenreListProps {
  selectedGenre: GenreProps | null;
  onSelectGenre: (genre: GenreProps) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }:GenreListProps) => {
  const { data, loading, error } = useGenres();
  const [smShow, setSmShow] = useState(false);

  useEffect(() => {
    if (error) {
      setSmShow(true);
    } else {
      setSmShow(false);
    }
  }, [error]);

  if (loading) return <Spinner />;

  return (
    <>
      {smShow && (
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Something is wrong!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            It looks like we cannot retrieve Genres right now, try refreshing again the page.
          </Modal.Body>
        </Modal>
      )}

      <div className={style.cntGenreList}>
        <ListGroup>
          {data.map((data) => (
            <div className={style.GenreImage} key={data.id}>
              <Image src={getCroppedImageUrl(data.image_background)} />
              <Button onClick={() => {
                onSelectGenre(data);
              }} 
              className={data.id === selectedGenre?.id ? style.selectedGenreText : ''}
              variant='link'
              >
                {data.name}
              </Button>
            </div>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default GenreList;
