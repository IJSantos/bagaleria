// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   imports: [],
//   templateUrl: './app.html',
//   styleUrl: './app.scss'
// })
// export class App {
//   protected title = 'bagaleria';
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'BAgaleria - Sua casa de praia no sul da bahia';
}