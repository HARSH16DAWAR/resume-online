import "./App.css";
import { Nav } from "./components/Nav";

import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="relative">
        <Nav />
        <iframe
          src="https://docs.google.com/gview?url=https://s3.amazonaws.com/harsh-resu.me/Resume.pdf&embedded=true"
          className="h-screen w-screen absolute top-0 left-0"
        >
          Your browser doesn't support iframes with pdf Please download to view
          the resume
        </iframe>
      </div>
    </ThemeProvider>
  );
}

export default App;
