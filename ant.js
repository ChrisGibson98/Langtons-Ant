class ant
{
  constructor(cell, squareSize, direction, lastCell)
  {
    this.cell = cell;
    this.x = x;
    this.y = y;
    this.squareSize = squareSize;
    this.direction = direction;
    this.lastCell = lastCell;
  }
  show ()
  {
    fill(255, 0, 0);
    // console.log(this.cell.xID + ", " + this.cell.yID);
    rect(this.cell.x, this.cell.y, this.squareSize, this.squareSize);
  }
  move(rate)
  {
    this.rate = rate;
    if(go == 1)
    {
      for(var i = 0; i < this.rate; i++)
      {
        // console.log(this.lastCell);
        this.lastCell = this.cell;
        this.lastCell.show();
                if(this.direction == 0)
        {
          if(this.cell.yID == hDen - 1)
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
          if(this.cell.xID == wDen - 1)
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
            this.cell = cells[hDen - 1][this.cell.xID];
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
            this.cell = cells[this.cell.yID][wDen - 1];
          }
          else
          {
            this.cell = cells[this.cell.yID][this.cell.xID - 1];
          }
          // this.show();

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
      }
    }
    go = 1;
  }
}
