let array1=[-4,5,-3,7,-10,8,-4,0,-3,5,-4,7];
function isPositive(run){
 if (run>=0)   return true; else false;
};

let rez_every = array1.every(isPositive);

let rez_some = array1.some(isPositive);
console.log('rez_every= '+rez_every+' rez_some= '+rez_some);