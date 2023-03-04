import { Router } from "../dep.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Path";
});

export { router };
