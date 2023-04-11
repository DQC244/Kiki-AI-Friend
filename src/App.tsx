import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { EnvConstant, PathConstant } from "const";
import { HomePage, LoginPage, ProfilePage, UIDemoPage } from "pages";
import { AuthenticationRoute } from "components/common";
import MainLayout from "layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstant.LOGIN} element={<LoginPage />} />
        <Route path={PathConstant.ROOT} element={<AuthenticationRoute element={<MainLayout />} />}>
          <Route path={PathConstant.ROOT} element={<HomePage />} />
          <Route path={PathConstant.PROFILE} element={<ProfilePage />} />
        </Route>
        {EnvConstant.IS_DEV && <Route path={PathConstant.UI_DEMO} element={<UIDemoPage />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
