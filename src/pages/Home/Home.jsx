import React from "react";
import { useGetProductsQuery } from "../../context/api/ProductApi";
const Home = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <div>
      Home
      {data?.data?.products?.map((product) => (
        <div key={product.id}>
          <img src={product.urls[0]} width={200} alt="" />
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
