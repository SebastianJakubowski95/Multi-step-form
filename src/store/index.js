import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  name: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
  phoneNumber: {
    value: "",
    isValid: false,
  },
  plan: "Arcade",
  term: "monthly",
  addOns: [],
  addOnsTotalPrice: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAddOns(state, action) {
      const addOnExists = state.addOns.some(
        (addOn) => addOn.title === action.payload.title
      );
      if (!addOnExists) {
        state.addOns = [...state.addOns, action.payload];
        state.addOnsTotalPrice = state.addOnsTotalPrice + action.payload.price;
      } else {
        const newAddOnsArr = state.addOns.filter(
          (addOn) => addOn.title !== action.payload.title
        );
        state.addOns = newAddOnsArr;
        state.addOnsTotalPrice = state.addOnsTotalPrice - action.payload.price;
      }
    },

    setName(state, action) {
      state.name.value = action.payload;
    },
    setEmail(state, action) {
      state.email.value = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber.value = action.payload;
    },
    setNameValidity(state, action) {
      state.name.isValid = action.payload;
    },
    setEmailValidity(state, action) {
      state.email.isValid = action.payload;
    },
    setPhoneNumberValidity(state, action) {
      state.phoneNumber.isValid = action.payload;
    },
    setPlan(state, action) {
      state.plan = action.payload;
    },
    setTerm(state, action) {
      state.term = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
});

export const userActions = userSlice.actions;
export default store;
