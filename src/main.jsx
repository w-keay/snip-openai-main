// Import necessary React and ReactDOM modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import Provider from react-redux to connect the Redux store to the app
import { Provider } from "react-redux";

// Import the main App component
import App from "./App";

// Import the Redux store
import { store } from "./services/store";

// Use ReactDOM.createRoot to render the app into the "root" element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provide the Redux store to the entire application using the Provider component */}
    <Provider store={store}>
      {/* Render the main App component */}
      <App />
    </Provider>
  </React.StrictMode>
);
