import { Ingredient } from "../shared/ingredient";

export class Recipie{
    constructor(public recipieName :string, public description :string, public  recipieImg:string,public ingreds :Ingredient[]){};
}