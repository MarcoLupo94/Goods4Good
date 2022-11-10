import { Component, OnInit } from '@angular/core';
import { ImageService } from '../utils/image.service';
import { NgForm } from '@angular/forms';
import { Item } from 'libs/api-interfaces/src/lib/api-interfaces';
import { ActivatedRoute } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'charity-app-production-donate-clothes',
  templateUrl: './donate-clothes.component.html',
  styleUrls: ['./donate-clothes.component.css'],
})
export class DonateClothesComponent {
  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}
  selectedFile: ImageSnippet | undefined;
  item: Item = {
    _id: '',
    title: '',
    description: '',
    img_url: '',
    size: '',
    price: 0,
    charity_shop: '',
    user_owner: '',
  };
  currentUser: User | undefined;

  handleSubmit(form: NgForm, image: any) {
    this.item = { ...form.value }; //GET FORM DATA
    this.processFile(image); //UPLOAD IMAGE AND SAVE URL
    this.item.charity_shop = this.route.snapshot.params['id']; //ADD charity reference ID
    console.log(this.auth.getUser);
    console.log(this.item);
  }
  processFile(image: any) {
    const file: File = image.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService
        .uploadImage(this.selectedFile.file)
        .subscribe((data) => {
          for (const [key, value] of Object.entries(data)) {
            if (key === 'Location') {
              this.item.img_url = value;
            }
          }
        });
    });

    reader.readAsDataURL(file);
  }
  ngOnInit() {}
}

// Followed this tutorial to manage to transfer to aws service on the backend https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/
