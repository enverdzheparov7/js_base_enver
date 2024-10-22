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
        
    //148
   //1
    arr = ['a', 'b', 'c', 'd', 'e'];

    for (let i; i < arr.length; i++){
        console.log(arr[i])
    }
//2
    for (let i = 1; i < arr.length -1; i++){
        console.log(arr[i])
    }

///3
    for (let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i])
    }
//4
    arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
//149
//1
let arr1 = [2, 5, 9, 15, 1, 4];

for(let i = 0; i < arr1.length; i++ )
{
    if(arr[i] > 3 && arr[i] <10){
        console.log(arr[i])
    }
}

//2

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for(let key in obj){
    if(obj[key]%2!=0)
        console.log(obj[key])
}
//150
let res=0;
for(let i = 0; i<=100; ++i)
    {
      
        if(i%2!=1){
             res = res + i;
        
        }
    }
            console.log(res)
        
    
  let res1 = 0
    for(let i = 0; i<=99; ++i)
        {
            if(i%2!=0){
                res1 = res1 + i;
            }
          
            
        
        }

        console.log(res1)
        let res2 = 0;
        for(i=1; i<20; i++){
        res2 =  res2 * i;

        }
        console.log(res2)