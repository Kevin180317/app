import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

import { ToastController, LoadingController, Platform } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
    posts: any;
     subscription: any;
    p: any;
  constructor(
     
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private router: Router

  ) {}

  async ngOnInit(){
    this.firestore.collection('posts').valueChanges().subscribe(posts => {
    this.posts = posts;
    this.p = posts;
    });
  }

  initializeItems(): void{
this.posts = this.p;
  }

   filterList(evt ){
    this.initializeItems();

  const searchTerm = evt.srcElement.value;
  
if(!searchTerm){
  return;
}
this.posts = this.posts.filter(post => {
  if(post.nombres && searchTerm){
    if (post.nombres.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
    return true; }
    return false;
  }
});
}
  


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

  async getPosts() {
    // console.log("get posts");

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
      this.firestore
        .collection("posts")
        .snapshotChanges()
        .subscribe(data => {
          this.posts = data.map(e => {
            return {
              id: e.payload.doc.id,
              apellidoP: e.payload.doc.data()["apellidoP"],
              apellidoM: e.payload.doc.data()["apellidoM"],
              nombres: e.payload.doc.data()["nombres"],
              edad: e.payload.doc.data()["edad"],
              sexo: e.payload.doc.data()["sexo"],
              estado: e.payload.doc.data()["estado"],
              domicilio: e.payload.doc.data()["domicilio"],
              sangre: e.payload.doc.data()["sangre"],
              nacimiento: e.payload.doc.data()["nacimiento"],
              lugar: e.payload.doc.data()["lugar"],
              seguro: e.payload.doc.data()["seguro"],
              telefono: e.payload.doc.data()["telefono"],
              padecimiento: e.payload.doc.data()["padecimiento"],
              peso: e.payload.doc.data()["peso"],
              vacuna: e.payload.doc.data()["vacuna"],
              enfermedades: e.payload.doc.data()["enfermedades"],
              alimentacion: e.payload.doc.data()["alimentacion"],
              vivienda: e.payload.doc.data()["vivienda"],
              diabetes: e.payload.doc.data()["diabetes"],
              hipertension: e.payload.doc.data()["hipertension"],
              respiratorias: e.payload.doc.data()["respiratorias"],
              alergias: e.payload.doc.data()["alergias"],
              cirugias: e.payload.doc.data()["cirugias"]

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

    await this.firestore.doc("posts/" + id).delete();

    // dismiss loader
    loader.dismiss();
  }

  ionViewWillEnter() {
    this.getPosts();
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
