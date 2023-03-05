import { RouterContext } from "../../dep.ts";

type Route = "/" | "/stop_finder/:name_sf";
export type TPContext<R extends Route> = RouterContext<R>;
