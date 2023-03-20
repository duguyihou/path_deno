const stopFinder = async (name_sf: string) => {
  const params = [
    `outputFormat=rapidJSON`,
    `type_sf=any`,
    `name_sf=${encodeURIComponent(name_sf)}`,
    `coordOutputFormat=${encodeURIComponent("EPSG:4326")}`,
    `TfNSWSF=true`,
    `version=10.2.1.42`,
  ].join("&");

  const url = `${Deno.env.get("BASE_URL")}/v1/tp/stop_finder?${params}`;
  const sfResponse = await fetch(url, {
    headers: {
      Authorization: `apikey ${Deno.env.get("API_KEY")}`,
      "Content-Type": "application/json",
    },
  });
  console.log("🐵 sfResponse ------ ", sfResponse);
  if (sfResponse.ok) {
    const sfResponseJson = await sfResponse.json();
    console.log("🐵  sfResponseJson------ ", sfResponseJson);
    return sfResponseJson;
  }
};

const tpService = { stopFinder };
export default tpService;
