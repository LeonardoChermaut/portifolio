import { Analytics } from "@vercel/analytics/react";
import { Sidebar, MainContent } from "./components/index";
import "./styles/app.sass";

export const App = () => {
  return (
    <div id="portfolio">
      <Sidebar />
      <MainContent />
      <Analytics />
    </div>
  );
}
