import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import { HomeLayout } from "./layouts"
import { ContactPage, HomePage } from "./pages"

export const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route element={<HomeLayout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Route>
  </Route>
))