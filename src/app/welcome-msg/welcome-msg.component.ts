import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  private static CHK_KEYUP_WAIT_SEC = 5000;
  private vaild = false;

  title = 'afterWork';
  userName = '';

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.vaild) { return; }
      alert('이름을 입력해주세요.');
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name) {
    this.vaild = name.length > 0;
  }

  onChange() {
    this.vaild = this.userName.length > 0;
  }
}
