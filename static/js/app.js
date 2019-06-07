// from data.js
var tableData = data;

// --- Log the data ---
// Log the data
console.log(tableData);

// Select where to append the data
var tbody = d3.select("tbody");

// Append the data
data.forEach((ufodata) => {
    // console.log(ufodata);
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
// --- END Log the data ---

// Select the click action
var button = d3.select("#filter-btn");

// define the function
function handleClick() {
    // prevent refreshing
    d3.event.preventDefault();
    // Get the input element  
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    //console.log(inputValue);

    // clear the tbody
    tbody.text("");
    // filter the data
    var filterdata = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filterdata);

    filterdata.forEach((updateufodata) => { 
        var row = tbody.append("tr");
        Object.entries(updateufodata).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);})
    });
};

button.on("click", handleClick)



  
  