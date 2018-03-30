class ant
{
  constructor(cell, squareSize, direction)
  {
    this.cell = cell;
    this.x = x;
    this.y = y;
    this.squareSize = squareSize;
    this.direction = direction;
  }
  show ()
  {
    // stroke(1);
    // fill(255, 0, 0, 0);
    // ellipse((this.cell.x + squareSize/2), (this.cell.y + squareSize/2), this.squareSize/2);
  }
  move(rate)
  {
    this.rate = rate;
    if(go == 1)
    {
      for(var i = 0; i < this.rate; i++)
      {
        if(this.direction == 0)
        {
          if(this.cell.yID == density - 1)
          {
            this.cell = cells[0][this.cell.xID];
          }
          else
          {
            this.cell = cells[this.cell.yID + 1][this.cell.xID];
          }
        }
        else if(this.direction == 1)
        {
          if(this.cell.xID == density - 1)
          {
            this.cell = cells[this.cell.yID][0];
          }
          else
          {
            this.cell = cells[this.cell.yID][this.cell.xID + 1];
          }
        }
        else if(this.direction == 2)
        {
          if(this.cell.yID == 0)
          {
            this.cell = cells[density - 1][this.cell.xID];
          }
          else
          {
            this.cell = cells[this.cell.yID - 1][this.cell.xID];
          }
        }
        else if(this.direction == 3)
        {
          if(this.cell.xID == 0)
          {
            this.cell = cells[this.cell.yID][density - 1];
          }
          else
          {
            this.cell = cells[this.cell.yID][this.cell.xID - 1];
          }
        }

        if(this.cell.cellState == 0)
        {
          this.direction --;
          this.cell.cellState = 1;
        }
        else if (this.cell.cellState == 1)
        {
          this.direction ++;
          this.cell.cellState= 0;
        }
        this.cell.show();
        if (this.direction == 4)
        {
          this.direction = 0;
        }
        if(this.direction == -1)
        {
          this.direction = 3;
        }
        // steps++;
        // console.log(steps);
      }
    }
    go = 1;
  }
}
