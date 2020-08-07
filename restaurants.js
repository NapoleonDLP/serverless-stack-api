import handler from "./libs/handler-lib";
import axios from "axios";

export const main = handler(async(event, context) => {
  //request is going to have location points and search
  const data = JSON.parse(event.body);
  const params = {
    latitude: data.latitude,
    longitude: data.longitude,
    term: data.term
  };

  const url = `https://api.yelp.com/v3/businesses/search?term=${params.term}&latitude=${params.latitude}&longitude=${params.longitude}`;

  async function retrieveRestaurants() {
    let data;

    axios.get(url, {
      headers: {
        "Authorization": `Bearer ${process.env.yelpKey}`
      }
    })
    .then((results) => {
      data = results;
    });

    return data;
  }

  return retrieveRestaurants();
});
