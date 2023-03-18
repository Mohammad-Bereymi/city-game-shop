import { toast } from "react-toastify";

export default function CheckInCart(cart, product) {
  return cart.find((item) => item.id == product.id);
}
