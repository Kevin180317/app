import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.page.html",
  styleUrls: ["./edit-post.page.scss"]
})
export class EditPostPage implements OnInit {
  post = {} as Post;
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

    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    this.firestore
      .doc("posts/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.apellidoP = data["apellidoP"];
        this.post.apellidoM = data["apellidoM"];
        this.post.nombres = data["nombres"];
        this.post.edad = data["edad"];
        this.post.sexo = data["sexo"];
        this.post.estado = data["estado"];
        this.post.domicilio = data["domicilio"];
        this.post.sangre = data["sangre"];
        this.post.nacimiento = data["nacimiento"];
        this.post.lugar = data["lugar"];
        this.post.seguro = data["seguro"];
        this.post.telefono = data["telefono"];
        this.post.padecimiento = data["padecimiento"];
        this.post.peso = data["peso"];
        this.post.vacuna = data["vacuna"];
        this.post.enfermedades = data["enfermedades"];
        this.post.alimentacion = data["alimentacion"];
        this.post.vivienda = data["vivienda"];
        this.post.diabetes = data["diabetes"];
        this.post.hipertension = data["hipertension"];
        this.post.respiratorias = data["respiratorias"];
        this.post.alergias = data["alergias"];
        this.post.cirugias = data["cirugias"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updatePost(post: Post) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      loader.present();

      try {
        await this.firestore.doc("posts/" + this.id).update(post);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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