import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/campersSlice.js";
import camperFavReducer from "./favorite/favoriteSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesIds"],
};

const persistedReducer = persistReducer(persistConfig, camperFavReducer);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    camperFav: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
