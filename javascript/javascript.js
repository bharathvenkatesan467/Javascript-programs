// 1.array creation and inilization

let arr1=[];
let size=prompt("enter the size:");
for(i=0;i<size;i++)
{
    let ar=0;
    ar=i+1;
    arr1.push(ar);
}
console.log("1.Array creation and inlization:");
console.log(arr1);

// 2.Array manipulation

let arr3=[1,9,8,2,3,7,6,3,4,5];
let arr2=arr3.sort();
console.log("2.Array Manipulation:");
console.log(arr2);
console.log("pop element is:"+arr2.pop());
console.log(arr2);
console.log("array push element:"+arr2.push(10));
console.log(arr2);
console.log("array shift element:"+arr2.shift());
console.log(arr2);
console.log("array unshift element:"+arr2.unshift());

// 3.array search

arr3=[1,9,8,2,3,7,6,3,4,5];
let v1=8;
let i1=arr3.indexOf(v1);
console.log("3.Array search:");
if(i1>=0 && i1<arr3.length)
{
    console.log("The given value is present in the array and position is "+i1);
}
else
{
    console.log("value is not found");
}

console.log("The given element is present in array"+arr3.includes(9));


// 4.array sorting

let arr4=[9,1,8,2,7,3,6,4,5];
console.log("4.Array sorting:");
console.log("The sorted array is "+arr4.sort());
console.log("The reversed arrey is "+arr4.reverse());

// 5. find maximun and minimum

let arr5=[10,38,64,53,65];
console.log("5.Find the minimum and maximum element:")
console.log("The array is "+arr5);
arr5=arr5.sort();
let s1=arr5.length-1;
console.log("The maximum element is "+arr5[s1]);
console.log("The minimum element is "+arr5[0]);

// 6.array mapping

let arr6=[2,4,6,8,10];
console.log("6.array mapping");
console.log("The mapping is "+arr6.map((x)=>x*2));

// 7.creating an array using given length

let arr7=[];
let s=prompt("enter the size:");
for(let j=0;j<s;j++)
{
    let i1=j*2;
    arr7.push(i1);
}
console.log("7.creating a new array by getting the length:"+arr7);

// 8.merge the arrays

let arr8=[1,2,3,4,5,6];
let arr9=[7,8,9,10,11];
console.log("merge the arrays :"+arr8.concat(arr9));


// 9.array slice

let arr10=[2,4,6,8,9.10];
console.log("9.array slice :"+arr10.slice(0,3));
