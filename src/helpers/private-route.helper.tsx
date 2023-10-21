import { Navigate, Outlet } from "react-router-dom";

type Props = {}

const PrivateRoute = (props: Props) => {

  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to={'/auth'} />
}


export default PrivateRoute