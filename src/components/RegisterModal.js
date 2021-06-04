import { ListGroup, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { updateRefUser } from "../redux/RegisterReducer";

export function RegisterModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefUser({}));
  };

  return (
    <Modal show={state.register.ref.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
        <Modal.Title>{state.register.ref.userName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>Name - {state.register.ref.name}</ListGroup.Item>
          <ListGroup.Item>
            User Name - {state.register.ref.userName}
          </ListGroup.Item>
          <ListGroup.Item>Email - {state.register.ref.email}</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={() => updateRefObj()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
