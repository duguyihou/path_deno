import configService from "../config/configService.ts";
import { Router } from "../dep.ts";

const tpRouter = new Router({ prefix: "/tp" });
tpRouter.get("/stop_finder", async (ctx) => {
  try {
    const { baseUrl, apiKey } = configService;
    const name = "Circular Quay";
    const params = [
      `outputFormat=rapidJSON`,
      `type_sf=any`,
      `name_sf=${encodeURIComponent(name)}`,
      `coordOutputFormat=${encodeURIComponent("EPSG:4326")}`,
      `TfNSWSF=true`,
      `version=10.2.1.42`,
    ].join("&");

    const url = `${baseUrl}/v1/tp/stop_finder?${params}`;

    const tpResponse = await fetch(url, {
      headers: {
        Authorization: `apikey ${apiKey}`,
      },
    });
    const tpResponseJson = await tpResponse.json();
    ctx.response.body = tpResponseJson;
  } catch (_error) {
    ctx.response.status = 500;
    ctx.response.body = "internal service error";
  }
});

export { tpRouter };
