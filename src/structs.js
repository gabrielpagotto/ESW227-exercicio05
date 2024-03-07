concatenarArrays = (arr1, arr2) => {
    arr1.push(arr2);
    return arr1;
}

mesclarObjetos = (objeto1, objeto2) => {
    return { ...objeto1, ...objeto2 };
}