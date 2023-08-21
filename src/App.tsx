import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Sidebar, MainContent } from "./data/presentation/components";
import "./data/presentation/sass/app.sass";

export const App = () => {
  return (
    <main id="portfolio">
      <Sidebar />
      <MainContent />
      <Analytics />
    </main>
  );
}
