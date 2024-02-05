async function productlist() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const ServerProductList = async () => {
  let products = await productlist();
  console.log(products);
  return (
    <div>
      <h1>server product list</h1>
      {products.map((item) => (
        <>
          <h1>productName:{item.title}</h1>
          <h1>price:{item.price}</h1>
        </>
      ))}
    </div>
  );
};

export default ServerProductList;
