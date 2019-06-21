function addRows() {
  var table = document.getElementById('dataTable');
  var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
}
function deleteRows() {
  var table = document.getElementById('dataTable');
  var row = table.deleteRow(0);
}
function addColumns() {
  var table =  document.getElementById('dataTable');
  var rows = table.rows;
  console.log(rows);
  for(let i = 0; i <rows.length; i++){
    rows[i].insertCell(0);
  }

}
function deleteColumns(){
  var table = document.getElementById('dataTable');
  var rows = table.rows;
  console.log(rows);
  for(let i = 0; i <rows.length; i++){
    rows[i].deleteCell(0);
  }

}
