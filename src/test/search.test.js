import mockAxios from "axios";
import axios from "axios";
import { url } from "../store/url";

async function searchData(query) {
  try {
    const { data } = await axios.get(`${url}/posts?q=${query}`, {
      timeout: 5000
    });
    return data;
  } catch (e) {
    console.error("Could not fetchData", e);
  }
}

it("Expect data fetch success", () => {
  searchData("react").then(response => {
    expect(response).toEqual({
      data: [
        { id: 2, title: "react-js", author: "hosein" },
        { id: 3, title: "react-native", author: "facebook" }
      ]
    });
  });
});
