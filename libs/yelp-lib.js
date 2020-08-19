import axios from "axios";

export async function retrieveRestaurants(url) {
  var result = await axios.get(url, {
    headers: {
      "Authorization": `Bearer ${process.env.YELP_KEY}`
    }
  });
  return result;
};
