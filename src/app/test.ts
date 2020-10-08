/<div id ="container"></div>
interface TestFunctionInterface{
    (value:number):number;
};

interface Test4FunctionInterface{
    (value:number):string;
};

interface MainPropsInterFace{
    value:number;
};

interface MainFunctionInterfcae{
    (props:MainPropsInterFace):Promise<any>;
};
const test1:TestFunctionInterface = (value:number):number=>value*1;

const test2:TestFunctionInterface = (value:number):number=>value*2;

const test3:TestFunctionInterface = (value:number):number=>value*3;

const test4:Test4FunctionInterface = (value:number):string=>document.getElementById("container").innerHTML += value*4+",";
const Main:MainFunctionInterfcae =(props:MainPropsInterFace):Promise<any>=>{
    return new Promise((resolve,reject)=>{
        let a:number = test1(props.value);
        let b:number = test2(props.value);
        let c:number = a+b;
        c === test3(props.value) ? resolve(c) : reject("Number is not equal") ;
        document.getElementById("container").innerHTML += a+",";
        document.getElementById("container").innerHTML += b+",";
    });
}

const props={
    value:1
};
Main(props)
    .then((data:any):number=>data+5)
    .then((data:any):string=>test4(data))
    .catch((err:any):string=>document.getElementById("container").innerHTML += err+",");