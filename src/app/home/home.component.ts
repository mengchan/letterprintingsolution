import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Policy Number', 'letter Type', 'Letter Status', 'Status','Stamp Status','Comment','Preview','APE','Agent Number'],
          dataRows: [
              ['1', '80159100', 'HLORL', 'Initial', 'ME1','UNDERWRITER STAMP','','Print Preview','0.00','69001357'],
              ['2', '80159100', 'HLMED', 'Initial', 'ME1','NO BREAKFAST','','Print Preview','$0.00','69001357'],
              ['3', '80159098', 'HLORL', 'Initial', 'ME1','UNDERWRITER STAMP','','Print Preview','$0.00','69001357'],
              ['4', '80159098', 'HLMED', 'Initial', 'ME1','NO BREAKFAST','','Print Preview','$0.00','69001357'],
              ['5', '80159095', 'HLORL', 'Initial', 'ME1','UNDERWRITER STAMP','','Print Preview','$0.00','69001357'],
              ['6', '80159095', 'HLMED', 'Initial', 'ME1','NO BREAKFAST','','Print Preview','$0.00','69001357']
          ]
      };
  }

}
