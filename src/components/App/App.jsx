import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../Layout/Layout";

const Home = lazy(() => import("../../pages/Home"));
const Tweets = lazy(() => import("../../pages/Tweets"));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </div>
  );
}
