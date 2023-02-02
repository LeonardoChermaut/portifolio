import { MainContent } from "./components/main-content/MainContent";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./styles/app.sass";

export function App() {
  return (
    <div id="portfolio">
      <div className="divisor-container"></div>
      <Sidebar />
      <MainContent />
    </div>
  );
}
