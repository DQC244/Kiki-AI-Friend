import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PathConstant } from "const";
import {
  DownloadPage,
  HomePage,
  LoginPage,
  ShopPage,
  BirthChartPage,
  SynastryChartPage,
  TransitChartPage,
  DailyTarotPage,
  TarotCardMeaningPage,
} from "pages";
import { AuthenticationRoute } from "components/common";
import MainLayout from "layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstant.LOGIN} element={<LoginPage />} />
        <Route path={PathConstant.ROOT} element={<AuthenticationRoute element={<MainLayout />} />}>
          <Route path={PathConstant.ROOT} element={<HomePage />} />
          <Route path={PathConstant.DOWNLOAD} element={<DownloadPage />} />
          <Route path={PathConstant.SHOP} element={<ShopPage />} />
          <Route path={PathConstant.BIRTH_CHART} element={<BirthChartPage />} />
          <Route path={PathConstant.SYNASTRY_CHART} element={<SynastryChartPage />} />
          <Route path={PathConstant.TRANSIT_CHART} element={<TransitChartPage />} />
          <Route path={PathConstant.DAILY_TAROT} element={<DailyTarotPage />} />
          <Route path={PathConstant.TAROT_CARD_MEANING} element={<TarotCardMeaningPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
