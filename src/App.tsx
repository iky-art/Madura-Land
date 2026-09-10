import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";
import Changelog from "./pages/Changelog";
import Kontribusi from "./pages/Kontribusi";
import Sosial from "./pages/Sosial";

export default function App() {
  return (
    <Layout>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/kontribusi" element={<Kontribusi />} />
        <Route path="/sosial" element={<Sosial />} />
      </Routes>
    </Layout>
  );
}
