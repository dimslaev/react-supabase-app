import { RouteObject } from "react-router-dom";
import stories from "./stories.json";

export const storyRoutes: RouteObject[] = Object.entries(stories)
  .map(([componentName, { path, stories }]) => {
    return stories.map((storyName) => ({
      path: `${componentName.toLocaleLowerCase()}/${storyName.toLocaleLowerCase()}`,
      lazy: () =>
        import(path).then((module) => {
          return {
            Component: module[storyName],
          };
        }),
    }));
  })
  .flat();
