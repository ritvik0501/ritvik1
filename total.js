function calculatetotal(...arrays){
    let sum=0;
   for(let i=0;i<arrays.length;i++)
   {
            sum+=arrays[i];
   }
   return sum;
}
let array=[10,20,30,40];
console.log(calculatetotal(...array))