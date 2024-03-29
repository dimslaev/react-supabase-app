import { RouteObject } from "react-router-dom";
import { Root } from "@/routes/root";
import { Storybook, storyRoutes } from "@/routes/storybook";
import { Game } from "@/routes/game";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [{ path: "game", element: <Game /> }],
  },
  {
    path: "storybook",
    element: <Storybook />,
    children: storyRoutes,
  },
];

export default routes;
