import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import UseState from "../pages/UseState"
import UseEffect from "../pages/UseEffect"
import UseRef from "../pages/UseRef";
import UseReducer from "../pages/UseReducer";
import UseCallback from "../pages/UseCallback";
import UseLayoutEffect from "../pages/UseLayoutEffect";
import UseMemo from "../pages/UseMemo";
import UseContext from "../pages/UseContext";
import ScrollToTop from "./components/ScrollToTop";

function Router() {

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usestate" element={<UseState />} />
                <Route path="/useeffect" element={<UseEffect />} />
                <Route path="/useref" element={<UseRef />} />
                <Route path="/usereducer" element={<UseReducer />} />
                <Route path="/usecallback" element={<UseCallback />} />
                <Route path="/uselayouteffect" element={<UseLayoutEffect />} />
                <Route path="/usememo" element={<UseMemo />} />
                <Route path="/usecontext" element={<UseContext />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
