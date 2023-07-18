import { Product } from "../../../../hooks/types/products";
import Button from "../../atoms/buttons/Button";
import styles from "./ProductDescription.module.css";

const ProductDescription = (props: { product: Product }) => {
  const { name, description, price, category } = props.product;
  return (
    <div className={styles.product_right}>
      <h5>{name}</h5>
      <p>{description}</p>
      <p>Categoría: {category}</p>
      <p>Precio: {price}</p>
      <Button>Comprar</Button>
    </div>
  );
};

export default ProductDescription;
