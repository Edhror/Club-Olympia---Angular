import { Coach } from '../coach/coach-list/coach';
import { Reservation } from '../reservation/reservation-list/reservation';

export class TrainingCamp{


    constructor(private _id: number, private _start: String, private _end: String, private _cost: number,
        private _coach: Coach, private _tipoSport: String, 
        private _reservations: Reservation[] ){

    }


    public get reservations(): Reservation[] {
        return this._reservations;
    }
    public set reservations(value: Reservation[]) {
        this._reservations = value;
    }
    public get tipoSport(): String {
        return this._tipoSport;
    }
    public set tipoSport(value: String) {
        this._tipoSport = value;
    }
    public get coach(): Coach {
        return this._coach;
    }
    public set coach(value: Coach) {
        this._coach = value;
    }
    public get cost(): number {
        return this._cost;
    }
    public set cost(value: number) {
        this._cost = value;
    }
    public get end(): String {
        return this._end;
    }
    public set end(value: String) {
        this._end = value;
    }
    public get start(): String {
        return this._start;
    }
    public set start(value: String) {
        this._start = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}