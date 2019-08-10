class PublicUser {
    username: string;
    email: string;
    birthdate: string;

    constructor(username: string, email: string, birthdate: string){
        this.username = username;
        this.birthdate = birthdate;
        this.email = email;
    }

    protected age(): number {
        // returns the age of the user
        // calculated from their DOB

        const CURRENT: Date = new Date();
        const DOB: Date = new Date(this.birthdate); 
        const ageInMs = CURRENT.getTime() - DOB.getTime();
        // convert milliseconds to years
        const msInYear = 365 * 24 * 60 * 60 * 1000;
        return Math.floor(ageInMs / msInYear);
    }
    
    public user(): object{
        return {
            username: this.username,
            email: this.email,
            birthdate: this.birthdate,
            age: this.age
        }
    }
}