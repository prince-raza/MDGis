import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map: Map;
  marker: any;
  latLong: number [];

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    this.map = new Map('myMap').setView([8.2397567, 124.2447603], 10);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
  }

  getPosition() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ];
    }).then((latlng) => {
      this.showMarker(latlng);
    });
  }

  showMarker(latLong) {
    this.marker = marker(latLong);
    this.marker.addTo(this.map)
    .bindPopup('Hey, I\'m Here ');
    this.map.setView(latLong, 15);
  }
}
