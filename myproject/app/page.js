'use client';
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch('/api/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data.data);
    });
  },[]);
  return (
    <main className="">
      {products.map(
        (productElement) => {
            return(<h1 className="bg-blue-900" key={productElement.id}>{productElement.name}</h1>)
        }
      )}
    </main>
  )
}
