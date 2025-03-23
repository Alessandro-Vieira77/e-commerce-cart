export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://martinelloeletrodomesticos.fbitsstatic.net/img/p/fone-de-ouvido-bluetooth-xiaomi-redmi-buds-4-active-xm757pre-79396/265988.jpg?w=482&h=482&v=no-change&qs=ignore"
          alt="logo produto"
          className="w-28"
        />

        <strong>Preço: R$1.000</strong>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            -
          </button>
          1
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>

        <strong className="float-right">SubTotal: R$1.000</strong>
      </section>

      <p className="font-bold mt-2">Total: R$1.000</p>
    </div>
  );
}
