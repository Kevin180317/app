import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, LoadingController, Platform } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {
  agendas: any;
  subscription: any;

  constructor(
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private router: Router
  ) {}

  

  onLogout(){
    console.log('Logout');
    this.router.navigateByUrl('/inicio');
  }



  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async getAgendas() {
    // console.log("get posts");

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
      this.firestore
        .collection("agendas")
        .snapshotChanges()
        .subscribe(data => {
          this.agendas = data.map(e => {
            return {
              id: e.payload.doc.id,
              ap: e.payload.doc.data()["ap"],
              am: e.payload.doc.data()["am"],
              nombre: e.payload.doc.data()["nombre"],
              fecha: e.payload.doc.data()["fecha"],
              descripcion: e.payload.doc.data()["descripcion"],
              lugar: e.payload.doc.data()["lugar"],

            };
          });

          // dismiss loader
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async deletePost(id: string) {
    // console.log(id);

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    await this.firestore.doc("agendas/" + id).delete();

    // dismiss loader
    loader.dismiss();
  }

  ionViewWillEnter() {
    this.getAgendas();
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
