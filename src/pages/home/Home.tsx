import { useEffect, useState, useContext } from "react";
import { api } from "../../service/api";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-hot-toast";

export interface ProdutosProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProdutosProps[]>([]);
  const { addIntemCat } = useContext(CartContext);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      const data = await response.data;
      setProducts(data);
    }
    getProducts();
  });

  function handleCatItem(product: ProdutosProps) {
    toast.success("Produto adicionado ao carrinho");
    addIntemCat(product);
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <img
                className="w-full rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 mb-2">{product.title}</p>

              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  onClick={() => handleCatItem(product)}
                  className="bg-zinc-900 p-1 rounded cursor-pointer"
                >
                  <BsCartPlus size={20} color="#FFFF" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
