class User {
    private DOB: string; // a datestring
    private email: string;
    private password: string;

    constructor(birthdate: string, email: string, 
        password: string){
            this.DOB = birthdate;
            this.email = email;
            this.password = password;
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
            DOB: this.DOB,
            age: this.age
        }
    }

    public validate(email: string, pw: string): boolean{
        return this.email === email && this.password === pw;
    }
}