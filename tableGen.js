let wrapper = document.createElement('div');
    wrapper.id = "wrapperId";
    document.body.appendChild(wrapper);

    function generateTable(){
    let rowsInput = document.createElement("rows");
    let rowsInputValue = rowsInput.value;

    let columnInput = document.createElement("column");
    let columnInputValue = columnInput.value;

    // creates a <table> element and a <tbody> element
    let table = document.createElement("table");
let tableBody = document.createElement("tbody");

// creating all cells
for (let i = 0; i < columnInputValue; i++) {
    // creates a table row
    let row = document.createElement("tr");
  
    for (let j = 0; j < rowsInputValue; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      let cell = document.createElement("td");
      let cellText = document.createTextNode("value in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
  
    // add the row to the end of the table body
    tableBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  table.appendChild(tableBody);
  wrapper.appendChild(table);

  // sets the border attribute of tbl to 2;
  table.setAttribute("border", "2");

}


