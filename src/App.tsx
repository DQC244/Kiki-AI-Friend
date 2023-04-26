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
  DailyTarotDetail,
  TarotDeskCardMeaningDetail,
  TarotCardMeaningDetail,
} from "pages";
import MainLayout from "layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstant.LOGIN} element={<LoginPage />} />
        <Route path={PathConstant.ROOT} element={<MainLayout />}>
          <Route path={PathConstant.ROOT} element={<HomePage />} />
          <Route path={PathConstant.DOWNLOAD} element={<DownloadPage />} />
          <Route path={PathConstant.SHOP} element={<ShopPage />} />
          <Route path={PathConstant.BIRTH_CHART} element={<BirthChartPage />} />
          <Route path={PathConstant.SYNASTRY_CHART} element={<SynastryChartPage />} />
          <Route path={PathConstant.TRANSIT_CHART} element={<TransitChartPage />} />
          <Route path={PathConstant.DAILY_TAROT}>
            <Route index element={<DailyTarotPage />} />
            <Route path=":id" element={<DailyTarotDetail />} />
          </Route>
          <Route path={PathConstant.TAROT_CARD_MEANING}>
            <Route index element={<TarotCardMeaningPage />} />
            <Route path=":id">
              <Route index element={<TarotDeskCardMeaningDetail />} />
              <Route path=":id" element={<TarotCardMeaningDetail />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
