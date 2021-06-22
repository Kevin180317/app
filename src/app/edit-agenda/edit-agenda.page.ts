import { Component, OnInit } from "@angular/core";
import { Agenda } from "../models/agenda.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";
@Component({
  selector: 'app-edit-agenda',
  templateUrl: './edit-agenda.page.html',
  styleUrls: ['./edit-agenda.page.scss'],
})
export class EditAgendaPage implements OnInit {
  agenda = {} as Agenda;
  id: any;

  constructor(
    private actRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    // console.log(this.id);

    this.getAgendaById(this.id);
  }

  async getAgendaById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    this.firestore
      .doc("agendas/" + id)
      .valueChanges()
      .subscribe(data => {
        this.agenda.ap = data["ap"];
        this.agenda.am = data["am"];
        this.agenda.nombre = data["nombre"];
        this.agenda.fecha = data["fecha"];
        this.agenda.descripcion = data["descripcion"];
        this.agenda.lugar = data["lugar"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateAgenda(agenda: Agenda) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      loader.present();

      try {
        await this.firestore.doc("agendas/" + this.id).update(agenda);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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
      this.showToast("introduce el domicilio");
      return false;
    }

    if (!this.agenda.fecha) {
      // show toast message
      this.showToast("introduce el tiempo en Tijuana");
      return false;
    }
    if (!this.agenda.descripcion) {
      // show toast message
      this.showToast("introduce el domicilio");
      return false;
    }

    if (!this.agenda.lugar) {
      // show toast message
      this.showToast("introduce el tiempo en Tijuana");
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