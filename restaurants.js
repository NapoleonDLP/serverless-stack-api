import handler from "./libs/handler-lib";
import axios from "axios";

export const main = handler(async(event, context) => {
  const params = event.queryStringParameters;
  const url = `https://api.yelp.com/v3/businesses/search?term=${params.term}&latitude=${params.latitude}&longitude=${params.longitude}`;

  const results = await axios.get(url, {
    headers: {
      "Authorization": `Bearer ${process.env.YELP_KEY}`
    }
  });

  return results.data;
});
