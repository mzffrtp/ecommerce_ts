import { FSCategoryType } from "@/shared/general-types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CategoryStateType = {
  categories: FSCategoryType;
};

const initialState: CategoryStateType = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<FSCategoryType>) => {
      state.categories = action.payload;
      console.log("categories", state.categories);
    },
  },
});

export default categorySlice.reducer;
export const { setCategories } = categorySlice.actions;
