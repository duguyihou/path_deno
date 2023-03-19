import configService from "../../config/configService.ts";

const stopFinder = async (name_sf: string) => {
  const { baseUrl, apiKey } = configService;
  console.log("🐵  ------ baseUrl", baseUrl);
  const params = [
    `outputFormat=rapidJSON`,
    `type_sf=any`,
    `name_sf=${encodeURIComponent(name_sf)}`,
    `coordOutputFormat=${encodeURIComponent("EPSG:4326")}`,
    `TfNSWSF=true`,
    `version=10.2.1.42`,
  ].join("&");

  const url = `https://api.transport.nsw.gov.au/v1/tp/stop_finder?${params}`;
  console.log("🐵  url------ ", url);

  const sfResponse = await fetch(url, {
    headers: {
      Authorization: `apikey ${apiKey}`,
    },
  });
  if (sfResponse.ok) {
    const sfResponseJson = await sfResponse.json();
    console.log('🐵 data ------ ', sfResponseJson)
    return sfResponseJson;
  }
};

const tpService = { stopFinder };
export default tpService;
