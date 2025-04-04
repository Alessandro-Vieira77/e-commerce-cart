import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ProdutosProps } from "../home/Home";
import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../service/db";

export function Product() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ProdutosProps[]>([]);
  let { product } = useParams();
  product = String(Number(product) - 1);
  const { addIntemCat } = useContext(CartContext);

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
        setCart(cartArray);
      });
      onSub;
    }
    productsDb();
  }, []);

  function addedProduct(cart: ProdutosProps) {
    addIntemCat(cart);
    navigate("/cart");
    toast.success("Produto adicionado ao carrinho");
  }

  return (
    <div className="flex justify-center gap-11 flex-wrap md:flex-nowrap w-full max-w-7xl px-4 mx-auto pt-7 mb-10">
      <img
        className="w-64 h-64"
        src={cart[Number(product)]?.cover}
        alt="image"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold ">{cart[Number(product)]?.title}</h1>
        <p className="max-w-2xl">{cart[Number(product)]?.description}</p>
        <div className="flex gap-3">
          <p className="text-base font-bold">
            {cart[Number(product)]?.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            onClick={() => addedProduct(cart[Number(product)])}
            className="bg-zinc-900 p-1 rounded cursor-pointer"
          >
            <BsCartPlus size={20} color="#FFFF" />
          </button>
        </div>
      </div>
    </div>
  );
}
