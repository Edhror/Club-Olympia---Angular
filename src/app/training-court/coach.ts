export class Coach{


    constructor(private _id: number, private _name: String){

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