import { Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Listpage from "./components/listpage";
import Goods from "./pages/goods";
import Topbar from "./widgets/topbar";
import Footer from "./widgets/footer";
import { Home } from "./pages/home";
import Mypage from "./pages/mypage";


function App() {
  return (
    <div className="max-w-[1920px]">
      <div className="top-0 w-full fixed z-50">
        <Topbar />
      </div>
      <div className="flex w-full justify-center pt-32">
        <div className="w-full md:w-[84.3%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/goods" element={<Goods />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/mypage" element={<Mypage />} />

          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
