import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function Root() {
  useEffect(() => {
    const isWebView = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const standalone = (window.navigator as any).standalone;
      const rules = [
        "webview",
        "wv",
        "linkedin",
        "(iphone|ipod|ipad)(?!.*safari)",
        "android.*(wv|.0.0.0)",
        "fb_iab",
        "instagram",
        "line",
        "fb4a",
        "fbav",
        "twitter",
      ];
      const regex = new RegExp(`(${rules.join("|")})`, "i");
      return Boolean(userAgent.match(regex)) || standalone === false;
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
