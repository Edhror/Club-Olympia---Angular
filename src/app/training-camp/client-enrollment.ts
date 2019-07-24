export class ClientEnrollment {
     constructor(private _clientId: number, private _trainingCampId: number, private _status: string){}

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get trainingCampId(): number {
        return this._trainingCampId;
    }
    public set trainingCampId(value: number) {
        this._trainingCampId = value;
    }
    public get clientId(): number {
        return this._clientId;
    }
    public set clientId(value: number) {
        this._clientId = value;
    }

    public toJSON() {
        return {
             clientId : this._clientId,
             trainingCampId : this._trainingCampId,
             status : this._status
        };
    }

   // constructor(public clientId: number, public trainingCampId: number, public status: string){}
}