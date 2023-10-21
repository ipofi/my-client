import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./helpers/private-route.helper";

const Layout = lazy(() => import('./views/_layout'));
const Auth = lazy(() => import('./views/auth'));
const MainApp = lazy(() => import('./views/app'));

function App() {
  return (
    <>
      <BrowserRouter>

        <Suspense>

          <Routes>

            <Route element={<Layout />}>

              <Route path="/auth" element={<Auth />} />

              <Route element={<PrivateRoute />}>

                <Route path="/*" element={<MainApp />} />
                
              </Route>

            </Route>

          </Routes>

        </Suspense>

      </BrowserRouter>
    </>
  )
}

export default App
