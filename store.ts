import { configureStore } from '@reduxjs/toolkit';
import tabbarStyleSlice from "./hooks/tabbarStyleSlice";
import themeSlice from "./hooks/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        tabbarStyle: tabbarStyleSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
