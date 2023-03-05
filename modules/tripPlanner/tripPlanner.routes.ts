import { Router } from "../../dep.ts";
import tpController from "./tripPlanner.controller.ts";

export const tpRouter = new Router({ prefix: "/api/v1/tp" });

tpRouter.get("/stop_finder/:name_sf", tpController.stopFinderHandler);
