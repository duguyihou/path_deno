import { tpRouter } from "../modules/tripPlanner/mod.ts";
import { composeMiddleware, Context, Middleware, Router } from "../dep.ts";

const combineRouters = (routers: Router[]) => {
  const middleware: Middleware<
    Record<string, unknown>,
    Context<Record<string, unknown>, Record<string, unknown>>
  >[] = [];

  routers.forEach((router) => {
    middleware.push(router.routes());
    middleware.push(router.allowedMethods());
  });
  return composeMiddleware(middleware);
};

export const routers = combineRouters([tpRouter]);