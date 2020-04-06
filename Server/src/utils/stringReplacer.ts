export function strObjReplace(array : any){
    for (var index = 0; index < array.length; index++) { 
       array[index]=array[index].replace(/["]/g,'');
   }
       return array
   }
