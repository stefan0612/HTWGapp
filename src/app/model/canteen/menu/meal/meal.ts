export class  Meal {
    
    public ctgry: string;
    public title: string;
    public priceStud: string;
    public priceEmpl: string;

    constructor(ctgry: string, title: string, priceStud: string, priceEmpl: string) {
        this.ctgry = ctgry;
        this.title = title;
        this.priceStud = priceStud;
        this.priceEmpl = priceEmpl;
    }

}