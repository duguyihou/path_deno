import { dotenv } from "../dep.ts";

const config = await dotenv.load({ export: true });

const configService = {
  baseUrl: config["BASE_URL"],
  apiKey: config["API_KEY"],
};
console.log("🐵  ------config ", config);
export default configService;
