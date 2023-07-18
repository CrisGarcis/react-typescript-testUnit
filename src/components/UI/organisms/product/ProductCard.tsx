import { Product } from "../../../../hooks/types/products";
import ProductDescription from "../../molecules/product/ProductDescription";
import styles from "./ProductCard.module.css";
const ProductCard = (props: { product: Product; index: number }) => {
  const {
    product: { image },
    index,
  } = props;
  return (
    <div data-testid={`product-${index}`} className={styles.product}>
      <div
        className={styles.product_left}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <ProductDescription product={props.product} />
    </div>
  );
};

export default ProductCard;
