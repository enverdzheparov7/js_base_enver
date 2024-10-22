//144
let arr = ['a', 'b', 'c', 'd', 'e'];

for(let elem of arr){
    console.log(elem);
}
//145
let obj = {x: 1, y: 2, z: 3};
for(let key in obj){
    console.log(key)
}

for(let key in obj){
    console.log(obj[key])
}
//146

//146

let num = 1;
while(num<100){
    num++;
    console.log(num);
}

let num1 = 11;

while(num1<33){
    num1++;
    console.log(num1)
}

let i = 0;
let num2 = 3;

while(num2<1000){
    num2*=3;
    console.log(num2)
    ++i;
}

console.log('Количество итераций - ' + i)

//147

for(let i = 0; i<=100; ++i)
{
    console.log(i);
}

for(let i = 11; i<=33; ++i)
    {
        console.log(i);
    }

    for(let i = 0; i<=100; ++i)
        {
            if(i%2==0){
                console.log(i);
            }
        }
        for(let i = 0; i<=99; ++i)
            {
                if(i%2==1){
                    console.log(i);
                }
            }

            for(let i=100; i>=0; i-- ){
                console.log(i);
            }
        
    