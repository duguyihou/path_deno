import { Application } from "./dep.ts";
import { router } from "./routes/routes.ts";
const app = new Application();

app.use(router.routes(), router.allowedMethods());

await app.listen({ port: 8000 });
