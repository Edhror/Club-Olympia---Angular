export class Reservation {

    constructor(private _id: number, private _start: String,
        private _end: String, private _cost: number, private _courtId: number, private _coachId: number) {
    }

    public get courtId(): number {
        return this._courtId;
    }
    public set courtId(value: number) {
        this._courtId = value;
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
    public get coachId(): number {
        return this._coachId;
    }
    public set coachId(value: number) {
        this._coachId = value;
    }
    
}