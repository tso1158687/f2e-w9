import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  skills: any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getSkills();
  }
  getSkills() {
    this.skills = this.dataService.getSkills();
  }
}
