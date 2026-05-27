fetch("https://script.google.com/macros/s/AKfycbzFaGMSeXie9yUBJlxTHmE2GWvh9fJRcBNMgtlH595IhLYtybr2mrCIB3LP3txz5Us7lA/exec")
  .then(r => r.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {

      let date = data[i][0].substr(0, 8);
      
      const yesterday = convertdate(new Date(new Date().setDate(new Date().getDate() - 1)));
      const today = convertdate(new Date());
      const tomorrow = convertdate(new Date(new Date().setDate(new Date().getDate() + 1)));

      let formatdate = date == yesterday ? "昨日" : date == today ? "今日" : date == tomorrow ? "明日" : data[i][0].substr(0, 4) + "年" + data[i][0].substr(4, 2) + "月" + data[i][0].substr(6, 2) + "日";

      if (data[i][1] !== "") {
        if (data[i][0] <= toString(convertdate(new Date()) + converttime(new Date()))){
          document.getElementById("assignment-table-before").innerHTML += `<tr>
            <td>${data[i][1]}</td>
            <td>${data[i][2]}</td>
            <td>${formatdate}</td>
          </tr>`;
        } else {
          document.getElementById("assignment-table-after").innerHTML += `<tr>
            <td>${data[i][1]}</td>
            <td>${data[i][2]}</td>
            <td>${formatdate}</td>
          </tr>`;
        }
      }
    }
  });

function convertdate(date) {
  return date.getFullYear() + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
}
function converttime(date) {
  return date.getHours() < 10 ? "0" + date.getHours() : date.getHours() + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
}