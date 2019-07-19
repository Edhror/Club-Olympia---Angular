export class Coach {

    constructor(private _id: number, private _firstname: String, private _lastname: String, 
        private _age: number, private _sex: String, private _bio: String ) {
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get bio(): String {
        return this._bio;
    }
    public set bio(value: String) {
        this._bio = value;
    }
    public get sex(): String {
        return this._sex;
    }
    public set sex(value: String) {
        this._sex = value;
    }
    public get lastname(): String {
        return this._lastname;
    }
    public set lastname(value: String) {
        this._lastname = value;
    }
    public get firstname(): String {
        return this._firstname;
    }
    public set firstname(value: String) {
        this._firstname = value;
    }
}