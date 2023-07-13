// Instructions can be found in destructuring_arrays.md

export function sequence(order) {
  const [first, second, third] = order;
  return order.toString().replaceAll(",", ", ");
}
