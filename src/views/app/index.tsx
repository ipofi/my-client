import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Users = lazy(() => import('./users'));
const User = lazy(() => import('./user'));

const index = () => {
  
  return (
    <Suspense>

      <Routes>

        <Route index element={<Navigate to={`/users`} />} />

        <Route path="users">

          <Route index element={<Users />} />

          <Route path=":id" element={<User />} />

        </Route>

      </Routes>

    </Suspense>
  )
}

export default index