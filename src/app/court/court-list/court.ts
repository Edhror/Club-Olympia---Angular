export class Court{
    
    constructor(private _id: number, private _name: String,
        private _surface: String, private _numplayer: number, private _cost: number) {
    }

    public get cost(): number {
        return this._cost;
    }
    public set cost(value: number) {
        this._cost = value;
    }
    public get numplayer(): number {
        return this._numplayer;
    }
    public set numplayer(value: number) {
        this._numplayer = value;
    }
    public get surface(): String {
        return this._surface;
    }
    public set surface(value: String) {
        this._surface = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}