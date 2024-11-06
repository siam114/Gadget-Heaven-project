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
    const storedListStr = localStorage.getItem('wishList');
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
        localStorage.setItem('wishList', storedListStr);
    }
}

const deleteFromWishList = (id) =>{
    const storedList = getStoreWishList();
    const filtered =  storedList.filter(item=>item!=id)
    localStorage.setItem('wishList', JSON.stringify(filtered));
}
const deleteFromCartList = (id) =>{
    const storedList = getStoreCartList();
    const filtered =  storedList.filter(item=>item!=id)
    localStorage.setItem('cart', JSON.stringify(filtered));
}


export {addToStoreCartList , addToStoreWishList, getStoreCartList, deleteFromCartList, deleteFromWishList}