const BASE_PATH_FORAPI =
  process.env.NODE_ENV === "development"
    ? "HTTP://localhost:3000"
    : "https://ecommerce-store-eta-lyart.vercel.app/";

export default BASE_PATH_FORAPI;
