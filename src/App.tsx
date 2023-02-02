import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/pages/login/LoginPage";
import { OrderPage } from "./components/pages/OrderPage";
import { ErrorPage } from "./components/pages/ErrorPage";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
