let wrapper = document.createElement('div');
    wrapper.id = "wrapperId";
    document.body.appendChild(wrapper);



function generateTable(){
    wrapper.innerHTML  = "";
    let rowsInput = document.getElementById("rows");
    let rowsInputValue = rowsInput.value;

    let columnInput = document.getElementById("column");
    let columnInputValue = columnInput.value;

    // create a <table> element and a <tbody> element
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let trow  = document.createElement("tr");

    for (let j = 1; j <= rowsInputValue; j++) {
        // Create a <th> element and a text node
        let cell = document.createElement("th");
        let cellText = document.createTextNode("Head"+j); 
        cell.appendChild(cellText);
        trow.appendChild(cell);   
      }
      thead.appendChild(trow);
      table.appendChild(thead);

    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
// creating all cells
for (let i = 0; i < columnInputValue; i++) {
    // creates a table row
    let row = document.createElement("tr");
  
    for (let j = 0; j < rowsInputValue; j++) {
      // Create a <td> element and a text node
      let cell = document.createElement("td");
      let cellText = document.createTextNode("value"); 
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
  
    // add the row to the end of the table body
    tableBody.appendChild(row);
  }


  // put the <tablebody> in the <table>
  table.appendChild(tableBody);
  wrapper.appendChild(table);

  // sets the border attribute of tbl to 2;
  //table.setAttribute("border", "1");
  //borderColorFunction();
  bgcolorFunction();
  bodybgcolorFunction();
  fontsFunction();
  fontWeightFunction();
  borderInpixels();
  textAlignFunction();
  tableWidthFunction();
    
}


function bgcolorFunction(){
    let bgcolor = document.querySelector("#backgroundColor");
    let table = document.querySelector("table");
    table.style.background = bgcolor.value;
        
}

/*function borderColorFunction(){
 let bColor = document.querySelector("#borderColor");
 let table = document.querySelector("table");
 table.style.borderColor = bColor.value;
}*/

/*function headbgColorFunction(){
    let hbgColor = document.querySelector("#headbackgroundColor");
    let table = document.querySelector("table");
    table.style.headbgColorFunction = hbgColor.value;
}*/

function bodybgcolorFunction(){
    let bordercolor = document.querySelector("#bodybackgroundColor");
    let body= document.querySelector("body");
    body.style.background= bordercolor.value;
}

function fontsFunction(){
    let fonts = document.querySelector("#select");
    tableBody = document.querySelector("tbody");
    tableBody.style.fontFamily = fonts.value;

}

function fontWeightFunction(){
    let fonWeight = document.querySelector("#pixels");
    tableBody = document.querySelector("tbody");
    tableBody.style.fontWeight= fonWeight.value;
}

function borderInpixels(){
    let borderInPixels = document.querySelector("#border");
    let bdColor = document.querySelector("#borderColor");
    let items = document.querySelectorAll("td, th, table");
    items.forEach((elem) => {
        elem.style.border = borderInPixels.value + "px " + "solid " + bdColor.value ;
    });
    document.querySelector("table").style.borderCollapse = "collapse";

}

function textAlignFunction(){
    let textAlign = document.querySelector("#text-align");
    tableBody = document.querySelector("tbody");
    tableBody.style.textAlign = textAlign.value;

}

function tableWidthFunction(){
    let tableWidth = document.querySelector("#tableWidth");
    tableBody = document.querySelector("table");
    tableBody.style.width = tableWidth.value + "%";
}