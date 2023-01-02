function calcDiscount(price: number, discount: number) {
  let calc = (price * discount) / 100;
  let final = price - calc;
  return Number(final.toFixed(2)).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

function formatCurrency(price: number) {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

export { calcDiscount, formatCurrency };
