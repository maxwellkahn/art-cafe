import sendRequest from "./sendRequest";

const BASE_URL = "/api/orders";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, "POST");
}

export function setCartQty(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, "PUT", { itemId });
}

export function checkout() {
  sendRequest(`${BASE_URL}/cart/checkout`, "POST");
}
