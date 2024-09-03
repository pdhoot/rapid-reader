import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function Root() {
  useEffect(() => {
    const isWebView = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /(webview|wv)/i.test(userAgent) || /linkedin/i.test(userAgent);
    };

    if (isWebView()) {
      const openInBrowser = window.confirm(
        "For the best experience, please open this app in a browser. Click OK to open in your default browser."
      );
      if (openInBrowser) {
        window.open(window.location.href, "_system");
      }
    }
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
