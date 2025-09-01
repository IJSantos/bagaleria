import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() citySelected = new EventEmitter<string>();
  cities: string[] = [];

  constructor(private houseService: HouseService) {
    this.cities = this.houseService.getCities();
  }

  selectCity(city: string): void {
    this.citySelected.emit(city);
  }

  selectAll(): void {
    this.citySelected.emit('all');
  }
}