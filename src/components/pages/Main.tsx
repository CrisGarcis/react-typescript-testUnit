import Modal from "../templates/modal/Modal";
import useModal from "../../hooks/useModal";
import Button from "../UI/atoms/buttons/Button";
import ProductsList from "../templates/product/ProductList";

function Main() {
  const { isOpen, toggle } = useModal();
  return (
    <div data-testid="main-view" className="App">
      <Button data-testid="button-open-modal" onClick={toggle}>
        Abrir modal
      </Button>

      <Modal isOpen={isOpen} toggle={toggle}>
        <div>Contenido de mi modal</div>
      </Modal>
      <ProductsList />
    </div>
  );
}

export default Main;
