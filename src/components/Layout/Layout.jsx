import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Appbar } from "../Appbar/Appbar";

export const Layout = () => {
  return (
    <>
      <header>
        <Appbar />
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
