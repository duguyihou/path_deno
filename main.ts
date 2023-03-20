import { dotenv, oakCors } from "./dep.ts";
import { Application } from "./dep.ts";
import { routers } from "./routes/routes.ts";

await dotenv.load({ export: true });

const app = new Application();

app.use(oakCors());
app.use(routers);

await app.listen({ port: 8000 });
