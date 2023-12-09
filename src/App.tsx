import NewNote from "./components/NewNote";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from "./components/Filter";

import NoteItems from "./components/NoteItems";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NewNote/>
          <NoteItems/>
        </Col>
        <Col md={4}>
          <Filter/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
