// @ts-nocheck
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL + "/api/v1";

const API = {
  //user or auth routes
  register: BACKEND_BASE_URL + "/register",
  verify: BACKEND_BASE_URL + "/verify",
  login: BACKEND_BASE_URL + "/login",
  forgotPassword: BACKEND_BASE_URL + "/password/forgot",
  resetPassword: BACKEND_BASE_URL + "/password/reset", //=> /:token
  updatePassword: BACKEND_BASE_URL + "/password/update",
  logout: BACKEND_BASE_URL + "/logout",
  user: BACKEND_BASE_URL + "/me",
  updateUser: BACKEND_BASE_URL + "/me/update",
  updateUserAddress: BACKEND_BASE_URL + "/me/updateAddress",

  //wishlist routes
  addToWishlist: BACKEND_BASE_URL + "/addtowishlist",
  removeFromWishlist: BACKEND_BASE_URL + "/removefromwishlist",

  //product routes
  getAllProducts: BACKEND_BASE_URL + "/products",
  getAllCategories: BACKEND_BASE_URL + "/product/categories",
  getAProduct: BACKEND_BASE_URL + "/product", //=> /:id
  review: BACKEND_BASE_URL + "/review",
  getReviews: BACKEND_BASE_URL + "/reviews",

  //order routes
  newOrder: BACKEND_BASE_URL + "/order/new",
  getSingleOrder: BACKEND_BASE_URL + "/order", //=> /:id
  myOrders: BACKEND_BASE_URL + "/orders/me",
  cancelOrder: BACKEND_BASE_URL + "/order/cancel", //=> /:id
  checkout: BACKEND_BASE_URL + "/checkout",

  //payment routes
  paymentVerification: BACKEND_BASE_URL + "/paymentverification",
  createPayment: BACKEND_BASE_URL + "/createpayment",
  getStripeApiKey: BACKEND_BASE_URL + "/stripeapikey",

  //coupon routes
  applyDiscount: BACKEND_BASE_URL + "/discount",

  //others
  getPaymentKey: BACKEND_BASE_URL + "/getkey",
};

export default API;
