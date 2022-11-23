import { Component, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../utils/image.service';
import { NgForm } from '@angular/forms';
import { Item } from '@charity-app-production/api-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUserService } from '../utils/current-user.service';
import { ItemsService } from '../utils/items.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
  pending = false;
  status = 'init';
}
@Component({
  selector: 'charity-app-production-donate-clothes',
  templateUrl: './donate-clothes.component.html',
  styleUrls: ['./donate-clothes.component.css']
})
export class DonateClothesComponent {
  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private user: CurrentUserService,
    private itemService: ItemsService,
    private router: Router
  ) {}

  @Output()
  errorEvent = new EventEmitter();

  selectedFile!: ImageSnippet;
  item: Item = {
    _id: '',
    title: '',
    description: '',
    img_url: '',
    size: '',
    price: 0,
    charity_shop: '',
    user_owner: ''
  };
  imgUrl = '';
  err = '';
  handleSubmit(form: NgForm) {
    this.item = {
      ...form.value,
      charity_shop: this.route.snapshot.params['id'], //ADD charity reference Id
      user_owner: this.user.currentUser._id, //ADD user reference Id
      img_url: this.imgUrl
    };
    this.itemService.postItem(this.item).subscribe(
      (response) => {
        // throw new Error();
        console.log('-------->Success:', response);
        this.err = '';
        form.resetForm();
        this.router.navigate(['thank-you']);
      },
      (err) => {
        (this.err = 'Error: please check if all field are correct'),
          console.log('---->Error:', err);
        this.errorEvent.emit(this.err);
      }
    );
  }

  processFile(image: any) {
    const file: File = image.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      try {
        this.imageService
          .uploadImage(this.selectedFile.file)
          .subscribe((data) => {
            this.onSuccess();
            for (const [key, value] of Object.entries(data)) {
              if (key === 'Location') {
                this.imgUrl = value;
              }
            }
          });
      } catch (err) {
        console.log(err);
        this.onError();
      }
    });

    reader.readAsDataURL(file);
  }
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
  }
}

// Followed this tutorial to manage to transfer to aws service on the backend https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/
