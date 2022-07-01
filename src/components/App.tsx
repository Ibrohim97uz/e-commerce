import React, { useState } from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { RootReducer } from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ProductId from "./product";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

const store = createStore(RootReducer, composeWithDevTools());

export const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/item/:id" element={<ProductId />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </div>
  );
};
