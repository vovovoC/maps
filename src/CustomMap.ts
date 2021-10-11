import {Mappable} from './Mappable';

export class CustomMap{
    private googleMap: google.maps.Map;
    constructor(mapDivId:string){
        this.googleMap = new google.maps.Map(document.getElementById(mapDivId),{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
         });
    }
    addMarker( client : Mappable) : void {
        const mapLocation = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat: client.location.lat,
                lng: client.location.lng
            }

        });
        mapLocation.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: client.markerContent()
            });
            infoWindow.open(this.googleMap,mapLocation);
        })
    }
}