import { Component } from '@angular/core';
import { Platform, AlertController, NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor(public alertCtrl: AlertController) {
    }
 
    scan() {
            BarcodeScanner.scan().then((result) => {
            	let alert = this.alertCtrl.create({
                    title: "Scan Results",
                    subTitle: result.text,
                    buttons: ["Close"]
                });
               alert.present();
            }).catch((error) => {
            	let alert = this.alertCtrl.create({
                    title: "Attention!",
                    subTitle: error,
                    buttons: ["Close"]
                });
                alert.present();
            });
    }
 }