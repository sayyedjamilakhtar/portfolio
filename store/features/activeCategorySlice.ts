import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveCategoryState {
  value: string;
}

const initialState: ActiveCategoryState = {
  value: "All",
};

const activeCategorySlice = createSlice({
  name: "activeCategory",
  initialState,
  reducers: {
    // action methods
    updateCategory: (state, action: PayloadAction<string>) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { updateCategory } = activeCategorySlice.actions;
export default activeCategorySlice.reducer;
