export class MyClass{
    //this can be doe directly through consytructor
   // private x: number;
   // private y : number;
//we cannot have 2 or more constructor but can make params optional with ?
    constructor(private x?:number,private y?:number)
    {
        //this.x=x;
      //  this.y=y;
    }

    draw(){
        console.log('inside draw X '+this.x+' Y '+this.y)
    }
    //property  for  the higher versions
    getX()
    {
        return this.x;

    }
    setX(value){
        this.x=value;
    }

}
export function testVariableDeclare()
{   let j=10;
    var k=45;//var is visible within the enclosing fuction no matter where it is declared but lot wit let
    for(var i=0;i<5;i++)
    {
        console.log(i);

    }
    console.log('I is visible here also in var but not in let',i);
}

export function varTypes()
{
    var a:number;
    var b :string;
    var c : boolean;
    let d :number[] =[1,2,3];
    let k :any;

    enum Color {RED,BLUE};

    let red :Color;


}