import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  items: any[];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.items = [];
    for (let i = 0; i < 200; i++) {
      this.items.push({
        name: 'ionitron',
        info: 'floating blue robot head'
      });
    };
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
