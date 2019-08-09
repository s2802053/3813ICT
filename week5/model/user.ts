class User {
    private DOB: string; // a datestring
    private email: string;
    private password: string;
    private valid: boolean;

    constructor(birthdate: string, email: string, 
        password: string, valid: boolean){
            this.DOB = birthdate;
            this.email = email;
            this.password = password;
            this.valid = valid;
        }

    private age(): number {
        // returns the age of the user
        // calculated from their DOB

        const CURRENT: Date = new Date();
        const DOB: Date = new Date(this.DOB); 
        const ageInMs = CURRENT.getTime() - DOB.getTime();
        // convert milliseconds to years
        const msInYear = 365 * 24 * 60 * 60 * 1000;
        return Math.floor(ageInMs / msInYear);
    }
    
    public user(): object{
        return {
            email: this.email,
            password: this.password,
            age: this.age,
            valid: this.valid
        }
    }

}