export class Utilities {
    public static formatDate(input : Date) : String{
        let res='';
        res+=input.getFullYear() + '-' + Utilities.padIfNeeded(input.getMonth())
        + '-' +  Utilities.padIfNeeded(input.getDate())
        + 'T' +  Utilities.padIfNeeded(input.getHours())
        + ':' +  Utilities.padIfNeeded(input.getMinutes());
        return res;

    }
    private static padIfNeeded(num : number) : string {
        if (num<10) {
            return '0' + num;
        
        }
        else {
            return '' + num;
        }
    }
}