var w;
var h;
var squareSize;
var density;
var cells = new Array(density);
var x;
var y;
var newAnt;
var steps;
var go;
var BGColor;
var multiHue;
var maxd;
var sw;
var wDen;
var hDen;

function setup()
{
	sw = 2;
	w = Math.ceil(windowWidth * 0.8);
	h = Math.ceil(windowHeight);
	density = Math.ceil(h/4);
	BGColor = 50;
	go = 1;
	steps = 0;
	squareSize = h/density;
	wDen = Math.floor(w/squareSize);
	hDen = Math.floor(h/squareSize);
	console.log(w + ", " + squareSize + ", " + wDen);
	console.log(h + ", " + squareSize + ", " + hDen);
	// createCanvas(w, h);
	// background(0);
	noStroke();
	maxd = int(dist(0, 0, (wDen/2)*squareSize, (hDen/2)*squareSize));
	multiHue = 360/maxd;
	for (var j = 0; j < hDen; j++)
	{
		cells[j] = new Array();
		for(var i = 0; i < wDen; i++)
		{
			cells[j][i] = new cell(i * squareSize, j * squareSize, i, j, squareSize, 0, int(dist(i * squareSize, j * squareSize, width/2, width/2)));
			// cells[j][i].show();
		}
	}
	createCanvas(wDen * squareSize, h);
	background(0);
	for(var j = 0; j < hDen; j++)
	{
		for(var i = 0; i < wDen; i++)
		{
						cells[j][i].show();
		}
	}
	  newAnt = new ant(cells[Math.floor(hDen/2)][Math.floor(wDen/2)], squareSize, 3);
}

function draw()
{
newAnt.move(25);
// console.log(newAnt.cell.xID + ", " + newAnt.cell.yID);
newAnt.show();
}
