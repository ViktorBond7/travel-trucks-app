import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/campersSlice.js";
import camperFavReducer from "./favorite/favoriteSlice";
import filtersSliceReducer from "./filters/filtersSlice.js";

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

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesIds"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
  whitelist: [
    "location",
    "form",
    "ac",
    "bathroom",
    "kitchen",
    "tv",
    "transmission",
  ],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    camperFav: persistReducer(favoritesPersistConfig, camperFavReducer),
    filters: persistReducer(filtersPersistConfig, filtersSliceReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
