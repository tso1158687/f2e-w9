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
      // e.state = 'locked';
      e.state = 'empty';
    });
    this.skills[0].state = 'empty';
    this.skills[2].state = 'empty';
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
    switch (skill.state) {
      case 'empty':
      skill.state = 'selected';
      break;
      case 'selected':
      skill.state = 'empty';
      break;
    }
    // this.skills.forEach(e => {
    //   const total = e.prev.length;
    //   let count = 0;
    //   e.prev.forEach(i => {
    //     this.skills.forEach(j => {
    //       if (i === j.id) {
    //         console.log(i, j.id, j.state);
    //         if (j.state === 'selected') {
    //           console.log('?');
    //           count ++;
    //           console.log(count);
    //         }
    //       }
    //     });
    //   });
    //   console.log(total);
    //   console.log(count);
    //   console.log('--');
    //   if (total === count) {
    //     console.log('!');
    //     e.state = 'empty';
    //   }
    // });
  }
  processDialog(skill) {
    // this.showDialog = true;
    this.dialogImgPath = 'assets/images/img_' + skill.id + '@2x.png';
    this.dialogContentDesc = skill.content;
    this.dialogContentTitle = skill.label;
  }

}
