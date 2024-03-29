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
  console.log("🐵 url ------ ", url);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `apikey ${Deno.env.get("API_KEY")}`,
      accept: "application/json",
    },
  }).then((res) => res.json());

  return response;
};

const tpService = { stopFinder };
export default tpService;
