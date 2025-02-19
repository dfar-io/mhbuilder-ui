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
    // 0 - low rank
    // 1 - high rank
    // 2 - master rank
    const rarity = 0;
    const skills = ['Attack Boost', 'Weakness Exploit'];

    const eligibleHelms = this.helmData.filter(h =>
      h.rank <= rarity &&
      h.skills.some(s => skills.indexOf(s.name) > -1)
    );
    const eligibleMails = this.mailData.filter(h =>
      h.rank <= rarity &&
      h.skills.some(s => skills.indexOf(s.name) > -1)
    );
    const eligibleBraces = this.braceData.filter(h =>
      h.rank <= rarity &&
      h.skills.some(s => skills.indexOf(s.name) > -1)
    );
    const eligibleCoils = this.coilData.filter(h =>
      h.rank <= rarity &&
      h.skills.some(s => skills.indexOf(s.name) > -1)
    );
    const eligibleGreaves = this.greaveData.filter(h =>
      h.rank <= rarity &&
      h.skills.some(s => skills.indexOf(s.name) > -1)
    );

    const eligibleHelmCount = eligibleHelms.length;
    const eligibleMailCount = eligibleMails.length;
    const eligibleBraceCount = eligibleBraces.length;
    const eligibleCoilCount = eligibleCoils.length;
    const eligibleGreaveCount = eligibleGreaves.length;

    console.log(`helms: ${eligibleHelms.length}`);
    console.log(`mails: ${eligibleMails.length}`);
    console.log(`braces: ${eligibleBraces.length}`);
    console.log(`coils: ${eligibleCoils.length}`);
    console.log(`greaves: ${eligibleGreaves.length}`);

    for(let i=0; i < eligibleHelmCount; i++) {
      for(let j=0; j < eligibleMailCount; j++) {
        for(let k=0; k < eligibleBraceCount; k++) {
          for(let l=0; l < eligibleCoilCount; l++) {
            for(let n=0; n < eligibleGreaveCount; n++) {
              const h = eligibleHelms[i];
              const m = eligibleMails[j]
              const b = eligibleBraces[k];
              const c = eligibleCoils[l];
              const g = eligibleGreaves[n];

              const def = h.baseDefense + m.baseDefense + b.baseDefense + c.baseDefense + g.baseDefense;

              console.log(`${def}: ${h.name}, ${m.name}, ${b.name}, ${c.name}, ${g.name}`);
            }
          }
        }
      }
    }

    const endTime = performance.now(); // End timing
    const duration = endTime - startTime; // Calculate duration
    console.log(`Method took ${duration} milliseconds to run.`);
  }
}
