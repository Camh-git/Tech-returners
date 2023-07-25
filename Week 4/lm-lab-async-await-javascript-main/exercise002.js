import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

//fetchData(jsonTypicode);

const callAPI = async (apiEndPoint) => {
  try {
    let result = await fetch(apiEndPoint);
    console.log(`Got data, status: ${result.status}\ncontent: ${result.json}`);
  } catch (e) {
    console.log(`Failed to retrieve data with error: ${e}`);
  }
};
callAPI(jsonTypicode);
