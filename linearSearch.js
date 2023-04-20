const linearSearch = (arr,target)=>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===target){
            return i
        }  
    }
    return -1
    //return the index of the target in the array. assume the array is integers between -10000 and 10000.;
    //if the target doesnt exist in the array, return -1;
    //if the number repeats, return first instance.
    //dont use `indexOf() or includes() or lastIndexOf()
}

module.exports = linearSearch