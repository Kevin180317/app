import { Component, OnInit } from '@angular/core';
import { Agenda } from "../models/agenda.model";
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-add-agenda',
  templateUrl: './add-agenda.page.html',
  styleUrls: ['./add-agenda.page.scss'],
})
export class AddAgendaPage implements OnInit {
agenda ={} as Agenda;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async createAgenda(agenda: Agenda) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      loader.present();

      try {
        await this.firestore.collection("agendas").add(agenda);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("intro");
    }
  }

  formValidation() {


    if (!this.agenda.ap) {
      // show toast message
      this.showToast("introduce el apellido paterno");
      return false;
    }

    if (!this.agenda.am) {
      // show toast message
      this.showToast("introduce el apellido materno");
      return false;
    }
    
    if (!this.agenda.nombre) {
      // show toast message
      this.showToast("introduce Apellido Paterno");
      return false;
    }

    if (!this.agenda.fecha) {
      // show toast message
      this.showToast("introduce Apellido Materno");
      return false;
    }

    if (!this.agenda.descripcion) {
      // show toast message
      this.showToast("introduce Apellido Paterno");
      return false;
    }

    if (!this.agenda.lugar) {
      // show toast message
      this.showToast("introduce Apellido Materno");
      return false;
    }

    

    

    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
  }
}

