// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Get color from picker and apply to var color
function getColor() {
  var color = document.getElementById('colorPicker').value;
  return color;
}

// When a square is clicked, apply the chosen color to the background
function squareClick(event) {
  $(this).css('background-color', getColor);
}

// Once size fields have been submitted, call makeGrid
$('#sizePicker').submit(makeGrid);

// Based on input fields, create grid
function makeGrid() {
  var table = document.getElementById('pixelCanvas');
  table.innerHTML = '';

  var quotes = [
    "Every artist was first an amateur. - Ralph Waldo Emerson",
    "Creativity takes courage. - Henri Matisse",
    "We don\'t make mistakes, just happy little accidents. - Bob Ross",
    "A picture is a poem without words. - Horace"
  ];
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

  $("table").prepend('<caption>' + randomQuote + '</caption>');

  var rows = document.getElementById('sizePicker').elements.namedItem('height').value;
  var cols = document.getElementById('sizePicker').elements.namedItem('width').value;

  var curRow, curCol;

  for (let n = 0; n < rows; n++) {
    curRow = document.createElement('tr');
    table.appendChild(curRow);

    for (let m = 0; m < cols; m++) {
      curCol = document.createElement('td');
      curRow.appendChild(curCol);

      // Listen for click on each td
      // Once clicked, call squareClick to apply color
      curCol.addEventListener('click', squareClick, false);
    }
  }
  event.preventDefault();
};