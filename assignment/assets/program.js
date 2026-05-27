fetch("https://script.google.com/macros/s/AKfycbzFaGMSeXie9yUBJlxTHmE2GWvh9fJRcBNMgtlH595IhLYtybr2mrCIB3LP3txz5Us7lA/exec")
  .then(r => r.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {

      let date = data[i][0].substr(0, 8);
      
      const yesterday = convertdate(new Date(new Date().setDate(new Date().getDate() - 1)));
      const today = convertdate(new Date());
      const tomorrow = convertdate(new Date(new Date().setDate(new Date().getDate() + 1)));

      let formatdate = date == yesterday ? "昨日" : date == today ? "今日" : date == tomorrow ? "明日" : data[i][0].substr(4, 2) + "/" + data[i][0].substr(6, 2);

      if (data[i][1] !== "") {
        console.log(data[i][0].substr(0, 8) + data[i][0].substr(9, 4), Number(convertdate(new Date()) + converttime(new Date())));
        if (Number(data[i][0].substr(0, 8) + data[i][0].substr(9, 4)) <= Number(convertdate(new Date()) + converttime(new Date()))){
          document.getElementById("assignment-table-before").innerHTML += `<tr>
            <td class="name">${data[i][1]}</td>
            <td class="subject">${data[i][2]}</td>
            <td class="due-date">${formatdate}</td>
          </tr>`;
        } else {
          document.getElementById("assignment-table-after").innerHTML += `<tr>
            <td class="name">${data[i][1]}</td>
            <td class="subject">${data[i][2]}</td>
            <td class="due-date">${formatdate}</td>
          </tr>`;
        }
      }
    }
  });

function convertdate(date) {
  return date.getFullYear() + String(date.getMonth() + 1).padStart(2, "0") + String(date.getDate()).padStart(2, "0");
}
function converttime(date) {
  return String(date.getHours()).padStart(2, "0") + String(date.getMinutes()).padStart(2, "0");
}