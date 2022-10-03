let url = 'https://api.sheety.co/2b5444c7555aa61f0ff6fa44987536f2/formattest/sheetone';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.sheetone);
});