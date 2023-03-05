import { Router } from "../dep.ts";
import { tpRouter } from "./tripPlanner.ts";

const router = new Router({prefix:'/api/v1'});

router.get("/", (ctx) => {
  ctx.response.body = "Hello Path";
});

router.use(tpRouter.routes(), tpRouter.allowedMethods());

export { router };
