import { useRef } from 'react';
import { Form } from 'react-bootstrap'

interface SearchInputProps { 
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }:SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  
  return (
    <>
    <Form className="d-flex" onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
    <Form.Control
      ref={ref}
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search games..."
    />
  </Form>
    </>
  )
}

export default SearchInput