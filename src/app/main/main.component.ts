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
    // 處理圖片位置
    this.skills.forEach(e => {
      e.y = e.y + 150;
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
    // console.log(skill);
    this.skills.forEach(e => {
      // this.state[skill.id] === 'locked' &&
      // skill.prev.every(prevID => this.state[prevID] === 'selected')
      if (
      e.state === 'locked' && e.prev.every(i => {
        console.log(i);
      })) {
        console.log('?');
      } else {
        console.log('這裡');
      }

      // console.log(e);
      // const target = e.prev.length;
      // const count = 0;
      // e.prev.forEach(i => {
      //   // console.log(i);
      //   // console.log(e);
      //   if (e.id === i && e.state === 'selected') {
      //     console.log('asd');
      //     skill.state = 'empty';
      //   }
      // });
      // if (e.state === 'locked') {
      //   console.log('locked');
      // }
      // e.prev.every(this.checkState());
      // const target = e.prev.length;
      // console.log(target);
      // console.log(e.prev);
      // e.prev.forEach((i, j, k) => {
      //   if (i === skill.id) {
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
  checkState() {

  }

}
