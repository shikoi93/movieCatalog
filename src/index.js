const DATA_KEY = "DATA_KEY";
const form = document.getElementById("movie-form");
const movieTable = document.querySelector("#table-body");
let tableData = [];

function saveRowData(rowData) {
  //console.log("tableData");
  //console.log(tableData[0]);

  tableData.push(rowData);
  localStorage.setItem(DATA_KEY, JSON.stringify(tableData));
  //console.log(tableData[0]);
}
//form.addEventListener("submit", function(e) {
//e.preventDefault();
// const movieName = e.target["movie-name"].value;
//const releaseDate = e.target["release-date"].value;
//e.target["release-date"].value = new Date
function addToTable(rowData) {
  const newTableRow = document.createElement("tr");

  newTableRow.innerHTML = `
<td>${rowData.movieName}</td>
<td>${rowData.releaseDate}</td>
`;
  movieTable.appendChild(newTableRow);
}
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const param = {
    movieName: e.target["movie-name"].value,
    releaseDate: e.target["release-date"].value
  };
  addToTable(param);
  saveRowData(param);
});
function loadTable() {
  const stringData = localStorage.getItem(DATA_KEY);
  //console.log("loading...", tableData);
  if (stringData) {
    tableData = JSON.parse(stringData);
    for (let data of tableData) {
      console.log("data");
      console.log(data);
    }
  }
}
loadTable();
