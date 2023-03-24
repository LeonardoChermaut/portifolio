import { Analytics } from "@vercel/analytics/react";
import { Sidebar, MainContent, ThemeSwitch } from "./components/index";
import "./styles/app.sass";

export function App() {
  return (
    <div id="portfolio">
      <Sidebar />
      <MainContent />
      <Analytics />
    </div>
  );
}
