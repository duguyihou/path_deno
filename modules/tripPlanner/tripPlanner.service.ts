import configService from "../../config/configService.ts";

const stopFinder = async (name_sf: string) => {
  const { baseUrl, apiKey } = configService;
  const params = [
    `outputFormat=rapidJSON`,
    `type_sf=any`,
    `name_sf=${encodeURIComponent(name_sf)}`,
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
  console.log('🐵  tpResponseJson------ ',tpResponseJson )
  return tpResponseJson;
};

const tpService = { stopFinder };
export default tpService;
