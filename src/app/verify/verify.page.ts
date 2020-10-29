import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  slideOpts;
  state = 1;
  phone = 0;
  cell1;
  cell2;
  cell3;
  verificationCode = 123456;
  constructor() { }

  ngOnInit() {
  }

  onChange(ev, stage, cell = 0) {
    console.log(ev.target.value);
    if (stage === 1) {
      if (ev.target.value.length === 11) {
        this.phone = ev.target.value;
        document.querySelector('ion-progress-bar').value = .66;
        document.querySelectorAll('li')[1].classList.add('cl');
        // ----------- TODO ---------- //
        // Send a message
        this.state++;
      }
    } else if (stage === 2) {
      // ------------- TODO -------------- //
      if (cell === 1) {
        this.cell1 = ev.target.value;
      } else if (cell === 2) {
        this.cell2 = ev.target.value;
      } else {
        this.cell3 = ev.target.value;
      }

      // ---------------------------------- //
      const total = this.cell1 + this.cell2 + this.cell3;
      console.log('total', total);
      if (total == 112233) {
          this.state++;
          document.querySelector('ion-progress-bar').value = 1;

          console.log(this.state,'++')
        }
    }

  }
  onLogin() {

  }
}
