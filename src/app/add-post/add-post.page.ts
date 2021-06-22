import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post.model";
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.page.html",
  styleUrls: ["./add-post.page.scss"]
})
export class AddPostPage implements OnInit {
  post = {} as Post;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async createPost(post: Post) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      loader.present();

      try {
        await this.firestore.collection("posts").add(post);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("home");
    }
  }

  formValidation() {
    if (!this.post.apellidoP) {
      // show toast message
      this.showToast("introduce Apellido Paterno");
      return false;
    }

    if (!this.post.apellidoM) {
      // show toast message
      this.showToast("introduce Apellido Materno");
      return false;
    }

    if (!this.post.nombres) {
      // show toast message
      this.showToast("introduce nombres");
      return false;
    }
    if (!this.post.edad) {
      // show toast message
      this.showToast("introduce la edad");
      return false;
    }

    if (!this.post.sexo) {
      // show toast message
      this.showToast("introduce el sexo");
      return false;
    }

    if (!this.post.estado) {
      // show toast message
      this.showToast("introduce el estado civil");
      return false;
    }
    if (!this.post.domicilio) {
      // show toast message
      this.showToast("introduce el domicilio");
      return false;
    }

    if (!this.post.sangre) {
      // show toast message
      this.showToast("introduce el tipo de sangre");
      return false;
    }
    if (!this.post.nacimiento) {
      // show toast message
      this.showToast("introduce la fecha de nacimiento");
      return false;
    }
    if (!this.post.lugar) {
      // show toast message
      this.showToast("introduce el lugar de nacimineto");
      return false;
    }
    if (!this.post.seguro) {
      // show toast message
      this.showToast("introduce el seguro");
      return false;
    }
    if (!this.post.telefono) {
      // show toast message
      this.showToast("introduce el telefono");
      return false;
    }
    if (!this.post.padecimiento) {
      // show toast message
      this.showToast("introduce el padecimiento ");
      return false;
    }
    if (!this.post.peso) {
      // show toast message
      this.showToast("introduce el peso");
      return false;
    }
    if (!this.post.vacuna) {
      // show toast message
      this.showToast("introduce la vacunacion completa");
      return false;
    }
    if (!this.post.enfermedades) {
      // show toast message
      this.showToast("introduce las enfermedades");
      return false;
    }
    if (!this.post.alimentacion) {
      // show toast message
      this.showToast("introduce alimentacion");
      return false;
    }
    if (!this.post.vivienda) {
      // show toast message
      this.showToast("introduce la vivienda");
      return false;
    }
    if (!this.post.diabetes) {
      // show toast message
      this.showToast("introduce diabetes");
      return false;
    }
    if (!this.post.hipertension) {
      // show toast message
      this.showToast("introduce hipertension");
      return false;
    }
    if (!this.post.respiratorias) {
      // show toast message
      this.showToast("introduce respiratorias");
      return false;
    }
    if (!this.post.alergias) {
      // show toast message
      this.showToast("introduce alergias");
      return false;
    }
    if (!this.post.cirugias) {
      // show toast message
      this.showToast("introduce cirugias");
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
