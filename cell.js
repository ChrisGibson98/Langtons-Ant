class cell
{
	constructor(x, y, xID, yID, squareSize, cellState, d)
	{
		this.x = x;
		this.y = y;
		this.xID = xID;
		this.yID = yID;
		this.squareSize = squareSize;
		this.cellState = cellState;
		this.d = d;
	}
	show ()
	{
		if(this.cellState == 1)
		{
			colorMode(HSB);
			// fill(this.d*multiHue, 100, 200);
			// fill(225, 225, 225);
			fill(180, 100, 200);
		}
		else if (this.cellState == 0)
		{
			colorMode(RGB);
			fill(BGColor);
		}
		else
		{
			fill(random(255), random(255), random(255));
		}
		strokeWeight(sw);
		stroke(0);
		rect(this.x, this.y, this.squareSize, this.squareSize);
	}
}
