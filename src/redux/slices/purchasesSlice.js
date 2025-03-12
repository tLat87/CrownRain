import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 300,
  purchasedItems: [],
};

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {
    resetProgressPurchases: () => initialState,
    // resetProgressBalance: () => ({ ...initialState, balance: 300 }), // Можем сбросить только баланс, если нужно
    addBalance: (state, action) => {
      state.balance += action.payload;
    },
    subtractBalance: (state, action) => {
      state.balance -= action.payload;
    },
    buyItem: (state, action) => {
      const { itemId, price } = action.payload;

      // Проверка, есть ли баланс для покупки
      if (state.balance >= price) {
        state.balance -= price; // Вычитаем цену товара из баланса
        // Добавляем товар в purchasedItems, если его нет
        if (!state.purchasedItems.some(item => item.id === itemId)) {
          state.purchasedItems.push({ id: itemId, price });
        }
      } else {
        alert('Not enough crowns');
      }
    },
  },
});

export const { addBalance, subtractBalance, resetProgressPurchases, resetProgressBalance, buyItem } = purchasesSlice.actions;

export const selectBalance = (state) => state.purchases.balance;
export const selectPurchasedItems = (state) => state.purchases.purchasedItems;

export default purchasesSlice.reducer;
