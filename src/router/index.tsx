import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { MyData } from "pages/my-data";
import { EditPet } from "pages/edit-pet";
import { ReportPet } from "pages/report-pet";
import { MyPets } from "pages/my-pets";
import { Auth } from "pages/auth";
import { Layout } from "components/layout/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/my-data" element={<MyData />}></Route>
        <Route path="/report-pet" element={<ReportPet />}></Route>
        <Route path="/edit-pet" element={<EditPet />}></Route>
        <Route path="/my-pets" element={<MyPets />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
