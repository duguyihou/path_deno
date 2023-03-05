import { Application } from "./dep.ts";
import { routers } from "./routes/routes.ts";
const app = new Application();

app.use(routers);

await app.listen({ port: 8000 });
