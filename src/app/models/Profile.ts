export class Profile {
    constructor(
    public name: string,
    public last_name: string,
    public email: string,
    public phone: string,
    public presentation: string,
    public imageURL: string,
    public specialities: Array<string>,
    public rate: number,
    public id: string,
    ){}
}