import { Component, OnInit } from '@angular/core';
import { Armor } from './armor';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mhbuilder';

  helmData: Armor[] = [];
  mailData: Armor[] = [];
  braceData: Armor[] = [];
  coilData: Armor[] = [];
  greaveData: Armor[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getHelms().subscribe((result) => {
      this.helmData = result;
    });

    this.dataService.getMails().subscribe((result) => {
      this.mailData = result;
    });

    this.dataService.getBraces().subscribe((result) => {
      this.braceData = result;
    });

    this.dataService.getCoils().subscribe((result) => {
      this.coilData = result;
    });

    this.dataService.getGreaves().subscribe((result) => {
      this.greaveData = result;
    });
  }

  calc() {
    const startTime = performance.now(); // Start timing

    // this.helmData.forEach(h => {
    //   this.mailData.forEach(m => {
    //     this.braceData.forEach(b => {
    //       this.coilData.forEach(c => {
    //         this.greaveData.forEach(g => {
    //           // const def = h.baseDefense +
    //           //             m.baseDefense +
    //           //             b.baseDefense +
    //           //             c.baseDefense +
    //           //             g.baseDefense;
    //         });
    //       });
    //     });
    //   });
    // });

    const endTime = performance.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    console.log(`Method took ${duration} milliseconds to run.`);
  }
}
