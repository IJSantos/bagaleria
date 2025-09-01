import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent {
  @Input() house!: House;
  currentImageIndex = 0;

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.house.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.house.images.length) % this.house.images.length;
  }

  downloadPdf(): void {
    window.open(this.house.pdfUrl, '_blank');
  }
}