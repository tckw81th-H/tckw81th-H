fetch("https://script.google.com/macros/s/AKfycbzFaGMSeXie9yUBJlxTHmE2GWvh9fJRcBNMgtlH595IhLYtybr2mrCIB3LP3txz5Us7lA/exec")
  .then(r => r.json())
  .then(data => {
    console.log(data);
  });