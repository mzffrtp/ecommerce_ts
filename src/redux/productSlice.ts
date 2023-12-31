import { FSProductType } from "../shared/general-types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FSProductStateType = {
  products: FSProductType[] | null;
};

const initialState: FSProductStateType = {
  products: null,
};

export const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<FSProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { setProducts } = ProductSlice.actions;
