// import { createSlice } from '@reduxjs/toolkit';
//
// const initialState = {
//   balance: 300,
//   purchasedItems: [],
// };
//
// const balanceSlice = createSlice({
//   name: 'balance',
//   initialState,
//   reducers: {
//     resetProgressBalance: () => initialState,
//     addBalance: (state, action) => {
//       state.balance += action.payload;
//     },
//     subtractBalance: (state, action) => {
//       state.balance -= action.payload;
//     },
//     buyItem: (state, action) => {
//       const { id, price } = action.payload;
//       if (state.balance >= price && !state.purchasedItems.includes(id)) {
//         state.balance -= price;
//         state.purchasedItems.push(id);
//       }
//     },
//   },
// });
//
// export const { addBalance, subtractBalance,resetProgressBalance, buyItem } = balanceSlice.actions;
// export default balanceSlice.reducer;
