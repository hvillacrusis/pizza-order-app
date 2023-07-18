import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import Home from "../pages/Home/Home";

interface MyRouteObject {
  path: string;
  element: React.ReactElement;
  children?: MyRouteObject[];
}

export const AppRoutes = () => {
  const commonRoutes: MyRouteObject[] = [{ path: "/", element: <Home /> }];

  const publicRoutesTyped: MyRouteObject[] = publicRoutes;

  const element = useRoutes([...publicRoutesTyped, ...commonRoutes]);

  return <>{element}</>;
};
