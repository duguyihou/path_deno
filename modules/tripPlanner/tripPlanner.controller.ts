import { TPContext } from "./tripPlanner.types.ts";
import tpService from "./tripPlanner.service.ts";

const stopFinderHandler = async (ctx: TPContext<"/stop_finder/:name_sf">) => {
  // TODO: 🐵 remove default value
  const { name_sf = "Circular Quay" } = ctx.params;

  try {
    const result = await tpService.stopFinder(name_sf);
    ctx.response.body = result;
  } catch (error) {
    console.error("sp error", error);
    ctx.response.status = 500;
    ctx.response.body = "internal service error";
  }
};

const tpController = {
  stopFinderHandler,
};

export default tpController;
