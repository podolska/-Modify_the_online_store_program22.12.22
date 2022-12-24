export default async function getCities(city) {
   const result = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      "headers": {
         "content-type": "application/json",
      },
      "apiKey": "ac9824c2bb125b1d3ba137fd230f611e",
      "modelName": "Address",
      "calledMethod": "getCities",
      "methodProperties": {
         "Page": "1",
         "FindByString": `${city}`,
         "Limit": "20"
      }
   });

   return result.data.data;
}