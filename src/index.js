import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Collection from "./pages/Collection";
import Collected from "./pages/Collective";
import Bugsnag from "@bugsnag/js";
import BugsnagPerformance from "@bugsnag/browser-performance";
import Collective from "./pages/Collective";

Bugsnag.start('a3246c88da8cbd540f9c3976967208cd');
BugsnagPerformance.start('a3246c88da8cbd540f9c3976967208cd');

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="collection" element={<Collection />} />
          <Route path="collective" element={<Collective/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);