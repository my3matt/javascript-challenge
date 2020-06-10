
// from data.js
var tableData = data;

// YOUR CODE HERE!
//select tbody and assign var

let tbody = d3.select("tbody");

//generate table
function generateTable(data){
  //console.log(generateTable)
  // clear data
  tbody.html("");
  //loop through vals
  data.forEach(function(tableVals){
    //append rows using tr 
    let row = tbody.append("tr");
    //for each row
    Object.entries(tableVals).forEach(function([key,value]) {
      //console.log(key,value);
      //append columns using td
      let cell = row.append("td");
      cell.text(value);


    });

  })
}
    
    // Select the button and assign function
var button = d3.select("#filter-btn");
  button.on("click", function clickButton() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
    
  // Select the input element and get the raw HTML node
  let dateinput = d3.select("#datetime").property("value");
  let filterData= tableData;
//if input exists, filter using input
 if (dateinput) {
    filterData = filterData.filter((row) =>row.datetime === dateinput);


    //generate table
    generateTable(filterData);
    d3.selectAll("#filter-btn").on("click", clickButton);
  }
  })

    generateTable(tableData);
