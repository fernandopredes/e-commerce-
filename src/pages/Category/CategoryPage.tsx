import { useEffect, useState } from "react";
import { fetchItemsByCategory } from "../../api";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/Card";
import { Product } from "../../types/product";
import { CategoryGrid } from "./CategoryStyles";

export const CategoryPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetchItemsByCategory(id).then(data => setItems(data));
  }, [id]);

  return (
    <CategoryGrid>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          url={item.url}
          price={item.price}
          />
      ))}
    </CategoryGrid>
  );
}
