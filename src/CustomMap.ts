interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(mappable: Mappable): void {
    const {
      location: { lat, lng },
      markerContent
    } = mappable;
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
