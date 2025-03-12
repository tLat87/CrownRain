import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItemId: 1, // По умолчанию выбираем товар с id = 1
};

const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    resetSelectedItem: () => initialState, // Для сброса выбранного товара
    setSelectedItem: (state, action) => {
      state.selectedItemId = action.payload; // Устанавливаем id выбранного товара
    },
    clearSelectedItem: (state) => {
      state.selectedItemId = null; // Очистить выбранный товар
    },
  },
});

export const { setSelectedItem, clearSelectedItem, resetSelectedItem } = selectedItemSlice.actions;

export const selectSelectedItem = (state) => state.selectedItem.selectedItemId; // Селектор для выбранного товара (теперь возвращает id)

export default selectedItemSlice.reducer;
