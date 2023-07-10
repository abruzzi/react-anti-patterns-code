import { Product } from "./types";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useState } from "react";
import Page from "./Page";
import PageProvider from "./PageProvider";

const products: Product[] = [
  {
    id: "p1",
    name: "iPad",
    image: "https://m.media-amazon.com/images/I/31NJHAAviGL._MCnd_AC_.jpg",
    price: 666,
  },
  {
    id: "p2",
    name: "iPhone",
    image: "https://m.media-amazon.com/images/I/31MX9scnEzL._MCnd_AC_.jpg",
    price: 777,
  },
];

const MyShop = () => {
  const [items, setItems] = useState<Product[]>([]);
  const addToItems = (id: string) =>
    setItems([...items, products.find((p) => p.id === id)!]);

  const removeFromItems = (id: string) => {
    setItems(items.filter((p) => p.id !== id));
  };

  return (
    <PageProvider
      config={{
        title: "My application",
        subtitle: "Product page",
        sidebarLinks: ["Home", "About", "Contact"],
        onToggleHeader: () => console.log("toggle header"),
        onToggleSidebar: () => console.log(`toggle sidebar`),
      }}
    >
      <Page>
        <div className="my-shop">
          <ProductList products={products} addToCart={addToItems} />
          <Cart cartItems={items} removeFromCart={removeFromItems} />
        </div>
      </Page>
    </PageProvider>
  );
};

export default MyShop;
