import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem"; 
import Tittle from "./Tittle";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter((item) => item.category === category);

      productCopy = productCopy.filter((item) => item.subCategory === subCategory);

      setRelated(productCopy.slice(0,5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24 ">
      <div className="text-3xl py-2 text-center ">
        <Tittle text1={'RELATED'} text2={'PRODUCTS'}></Tittle>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 md:grid-cols-3">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
