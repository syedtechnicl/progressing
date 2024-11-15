import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CardsItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: [] as CardsItem[],
  reducers: {
    Adding: (state, action: PayloadAction<CardsItem>) => {
      state.push(action.payload);
    },
    Removing: (state, action: PayloadAction<number>) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { Adding, Removing } = counterSlice.actions;

export default counterSlice.reducer;
