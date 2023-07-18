import { useState } from "react";
import ProductCard from "../../UI/organisms/product/ProductCard";
import Button from "../../UI/atoms/buttons/Button";
import { useFetchProducts } from "../../../hooks/useFetchProducts";

const ProductsList = () => {
  const [page, setpage] = useState(1);
  const { data, isLoading, error } = useFetchProducts(page);
  if (isLoading) {
    return <p data-testid="products-loading">Recuperando los productos...</p>;
  }
  if (error) {
    return <p data-testid="products-error">Error</p>;
  }

  return (
    <div>
      <h2>Lista de productos</h2>
      <div>
        {page > 1 && (
          <Button
            data-testid="button-previous"
            onClick={() => setpage(page - 1)}
          >
            Anterior
          </Button>
        )}
        <Button data-testid="button-next" onClick={() => setpage(page + 1)}>
          Siguiente
        </Button>
      </div>
      <div className="products">
        {data?.results.map((prod, index) => (
          <ProductCard product={prod} index={index} key={prod._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
