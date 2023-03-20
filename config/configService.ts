import { dotenv } from "../dep.ts";

const config = await dotenv.load({export:true});

const configService = {
  baseUrl: config["BASE_URL"],
  apiKey: config["API_KEY"],
};
export default configService;