import Navbar from "@/components/Navbar";
import ProductCart from "@/components/products/ProductCart";

const Home = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: 'force-cache'
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Oi oi pi mama product na</h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
        {
          products.map((product) => <ProductCart product={product} key={product.id}></ProductCart>)
        }
      </div>
    </div>
  );
}


export default Home