import { Component } from '@angular/core';
import { PopupReservationComponent } from '../popup-reservation/popup-reservation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-terrain',
  templateUrl: './reservation-terrain.component.html',
  styleUrl: './reservation-terrain.component.css'
})
export class ReservationTerrainComponent {
  constructor(private Dialog:MatDialog){}
  openPopup(){
    this.Dialog.open(PopupReservationComponent, {width:'70%',height:'70%'})
  }
}
