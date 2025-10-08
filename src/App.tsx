import { LoadingOutlined } from "@ant-design/icons";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
const Home = lazy(() => import("./pages/Home"));
const Discover = lazy(() => import("./pages/Discover"));

function App() {
  return (
      <Routes>
        <Route path="/" index element={
          <Suspense fallback={<div className="w-full h-screen flex flex-col justify-center text-3xl"><LoadingOutlined /></div>}>
            <Home />
          </Suspense>
          } 
        />
        <Route path="/discover" element={
          <Suspense fallback={<div className="w-full h-screen flex flex-col justify-center text-3xl"><LoadingOutlined /></div>}>
            <Discover />
          </Suspense>
          } 
        />
        <Route path="/personnalize/:templateId" element={
          <Suspense fallback={<div className="w-full h-screen flex flex-col justify-center text-3xl"><LoadingOutlined /></div>}>
            <EditorPage  />
          </Suspense>
          } 
        />
      </Routes>
  )
}

export default App