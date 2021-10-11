// instructions that other classes how to be arguments of method "addMarker"
export interface Mappable{
    location:{
        lat:number,
        lng:number
    };
    markerContent():string;
    color:string;
}