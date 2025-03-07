let b = 10;

function greet(){
    let a = 20;
    let b = 30;
    
    function meet(){
        console.log(a);
        console.log(b);
    }

    return meet;
}


const num = greet();
num();

