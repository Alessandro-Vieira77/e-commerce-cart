import { useEffect, useState, useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../../service/db";

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
  const navegate = useNavigate();

  useEffect(() => {
    async function productsDb() {
      const cartProducts = collection(db, "products");
      const queryRef = query(cartProducts, orderBy("id", "asc"));
      const onSub = onSnapshot(queryRef, (snapshot) => {
        let cartArray = [] as ProdutosProps[];

        snapshot.forEach((item) => {
          cartArray.push({
            id: item.data().id,
            title: item.data().title,
            description: item.data().description,
            price: item.data().price,
            cover: item.data().cover,
          });
        });

        setProducts(cartArray);
        onSub;
      });
    }
    productsDb();
  }, []);

  function handleCatItem(product: ProdutosProps) {
    toast.success("Produto adicionado ao carrinho");
    addIntemCat(product);
  }

  function productPage(id: number) {
    navegate(`/cart/${id}`);
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mb-10">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section
              key={product.id}
              className="w-full flex flex-col justify-center items-center"
            >
              <img
                className="w-full max-h-28 md:max-h-40 object-contain rounded-lg mb-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                src={product.cover}
                alt={product.title}
              />
              <p
                onClick={() => productPage(product.id)}
                className="font-medium text-center text-sm md:text-base mt-1 mb-2 hover:underline cursor-pointer"
              >
                {product.title}
              </p>

              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90 text-sm md:text-base">
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
