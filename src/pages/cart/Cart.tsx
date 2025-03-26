import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, addIntemCat, removeItemCart } = useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      {cart.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-2xl font-medium text-red-700">Carrinho vazio...</p>{" "}
          <Link
            className="text-base text-white my-2 p-1 px-2 bg-sky-800 rounded-md"
            to={"/"}
          >
            Acessar Produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-gray-300"
        >
          <img
            src={item.cover}
            alt={item.description}
            className="max-h-20 md:max-h-28 object-contain"
          />

          <strong className="text-xs md:text-base">{item.price}</strong>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => removeItemCart(item)}
              className="bg-slate-600 px-2 rounded text-white  font-medium flex items-center justify-center cursor-pointer"
            >
              -
            </button>
            <p className="text-xs md:text-base">{item.amount}</p>
            <button
              onClick={() => addIntemCat(item)}
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer"
            >
              +
            </button>
          </div>

          <strong className="float-right text-xs md:text-base">
            SubTotal:
            {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && (
        <p className="font-bold mt-2 text-xs md:text-base mb-10">
          Total: {total}
        </p>
      )}
    </div>
  );
}
