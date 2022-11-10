import { Component, OnInit } from '@angular/core';
import { ImageService } from '../utils/image.service';
import { NgForm } from '@angular/forms';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'charity-app-production-donate-clothes',
  templateUrl: './donate-clothes.component.html',
  styleUrls: ['./donate-clothes.component.css'],
})
export class DonateClothesComponent {
  constructor(private imageService: ImageService) {}
  selectedFile: ImageSnippet | undefined;

  processFile(image: any) {
    const file: File = image.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService
        .uploadImage(this.selectedFile.file)
        .subscribe((data) => console.log(data));
    });

    reader.readAsDataURL(file);
  }
}

// Followed this tutorial to manage to transfer to aws service on the backend https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/
