import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseCardComponent } from '../house-card/house-card.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HouseService } from '../../services/house.service';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HouseCardComponent, SidebarComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  houses: House[] = [];
  filteredHouses: House[] = [];

  constructor(private houseService: HouseService) {
    this.houses = this.houseService.getHouses();
    this.filteredHouses = this.houses;
  }

  onCitySelected(city: string): void {
    if (city === 'all') {
      this.filteredHouses = this.houses;
    } else {
      this.filteredHouses = this.houseService.getHousesByCity(city);
    }
  }
}