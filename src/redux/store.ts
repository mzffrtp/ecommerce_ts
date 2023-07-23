import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    productState: productReducer,
    categoryState: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
