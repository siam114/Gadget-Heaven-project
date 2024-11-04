const getStoreCartList = () =>{
    const storedListStr = localStorage.getItem('cart');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoreCartList = (id) =>{
    const storedList = getStoreCartList();
    if(storedList.includes(id)){
        console.log(id,'already exists');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedListStr);
    }
}

const getStoreWishList = () =>{
    const storedListStr = localStorage.getItem('cart');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoreWishList = (id) =>{
    const storedList = getStoreWishList();
    if(storedList.includes(id)){
        console.log(id,'already exists');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedListStr);
    }
}


export {addToStoreCartList , addToStoreWishList, getStoreCartList}