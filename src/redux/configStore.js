// rcredux =>
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    number: (state = 10, action) => {
      if (action.type === "Tang_SoLuong") {
        state = state + action.payload;
      }
      if (action.type === "Giam_SoLuong") {
        state = state - action.payload;
      }
      return state; // 11 // 9
    },
    color: (state = "red", action) => {
      return state;
    },
    imgCar: (state = "./img/products/red-car.jpg", action) => {
      if (action.type === "CHANGE_COLOR") {
        state = action.payload;
      }
      return state;
    },
  },
});
