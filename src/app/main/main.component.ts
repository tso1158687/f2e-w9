import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  skills: any;
  showDialog = false;
  dialogImgPath: any;
  dialogContentDesc: any;
  dialogContentTitle: any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getSkills();
  }
  getSkills() {
    this.skills = this.dataService.getSkills();
    // 處理圖片位置
    this.skills.forEach(e => {
      e.y = e.y + 300;
      e.imgPath = 'assets/images/img_' + e.id + '.png';
      e.state = 'locked';
    });
    this.skills[0].state = 'empty';
    this.skills[2].state = 'empty';
    console.log(this.skills);
  }
  buttonPosition(x, y) {
    const style = {
      'left': x + 'px',
      'top': y + 'px',
    };
    return style;
  }
  changeState(skill) {
    this.processDialog(skill);
    // console.log(skill);
    this.skills.forEach(e => {
      const target = e.prev.length;
      let count = 0;
      e.prev.forEach(i => {
        this.skills.forEach(j => {
          if (i === j.id && j.state === 'locked') {
            count++;
          }
        });
      });
      if (count === target) {
        e.state = 'empty';
      }
      // e.prev.forEach(i => {
      //   console.log(e.id);
      //   console.log(i);
      //   console.log('===');
      //   if (e.id === i) {
      //     console.log('asd');
      //     e.state = 'empty';
      //   }
      // });
    });
    switch (skill.state) {
      case 'empty':
      skill.state = 'selected';
      break;
      case 'selected':
      skill.state = 'empty';
      break;
    }
  }
  processDialog(skill) {
    // showDialog = false;
    // dialogImgPath: any;
    // dialogContent: any;
    this.showDialog = true;
    this.dialogImgPath = 'assets/images/img_' + skill.id + '@2x.png';
    this.dialogContentDesc = skill.content;
    this.dialogContentTitle = skill.label;
  }

}
