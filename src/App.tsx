import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ContactProvider } from "./components/ContactModal";
import { ResumePage } from "./pages/ResumePage";
import { BackToTop } from "./components/BackToTop";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function App() {
  return (
    <ContactProvider><ScrollToTop /><Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes><BackToTop /></ContactProvider>
  );
}
