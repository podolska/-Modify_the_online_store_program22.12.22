export default async function getDepartamentByNumber(value, city) {
   const resultDepartments = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      "headers": {
         "content-type": "application/json",
      },
      "apiKey": "ac9824c2bb125b1d3ba137fd230f611e",
      "modelName": "Address",
      "calledMethod": "getWarehouses",
      "methodProperties": {
         "Page": "1",
         "Limit": "50",
         "Language": "UA",
         "CityRef": `${city}`,
         "WarehouseId": `${value}`
      }
   });
   return resultDepartments.data.data;
}