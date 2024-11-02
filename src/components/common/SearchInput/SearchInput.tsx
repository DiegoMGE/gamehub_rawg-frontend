import { Button, Form } from 'react-bootstrap'

const SearchInput = () => {
  return (
    <>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search games..."
    />
    {/* <Button variant="outline-primary">Search</Button> */}
  </Form>
    </>
  )
}

export default SearchInput