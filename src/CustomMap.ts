import { ZOOM_LEVEL, DEFAULT_LOCATION } from './constants';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private infoWindow: google.maps.InfoWindow;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: DEFAULT_LOCATION,
        zoom: ZOOM_LEVEL
      }
    );
    this.infoWindow = new google.maps.InfoWindow();
  }

  addMarker(mappable: Mappable): void {
    // create a new marker
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      // close old info window
      this.infoWindow.close();

      // set content for click another marker
      this.infoWindow.setContent(mappable.markerContent());

      // open the info for clicking a specific marker
      this.infoWindow.open(this.googleMap, marker);
    });
  }
}
