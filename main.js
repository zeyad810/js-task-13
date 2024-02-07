let filterSalaries=[];
let totalSalary = 0 ;
const salaries=[1500,2500,3000,4700,7800,10500];
for(let start =0 ; start<=salaries.length ; start++){
    if(salaries[start] >=2500 ){
        filterSalaries.push(salaries[start]);
        totalSalary += salaries[start];
    }

};
console.log(filterSalaries); 
console.log(totalSalary);