const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const itemInd = state.findIndex((item) => item.id === action.payload.id);
      if (itemInd >= 0) {
        state[itemInd].qty++;
        return;
      }
      state.push({ ...action.payload, qty: 1 });
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    decrease(state, action) {
      const itemInd = state.findIndex((item) => item.id === action.payload.id);
      state[itemInd].qty--;
    },
    increase(state, action) {
      const itemInd = state.findIndex((item) => item.id === action.payload.id);
        state[itemInd].qty++;
      
    },
  },
});

export const { add, remove,decrease,increase } = cartSlice.actions;
export default cartSlice.reducer;
