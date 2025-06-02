// Read List Update
const getStroedReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}
const addToReadList = (id) => {
    const storedList = getStroedReadList();
    if (storedList.includes(id)) {
        alert(`${id} Already Exists On Your Read List.`);
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        alert(`${id} Saved On Read List.`);
    }
}

// Wish List Update
const getStroedWishList = () => {
    const stroedWishStr = localStorage.getItem('wish-list');
    if (stroedWishStr) {
        const wishList = JSON.parse(stroedWishStr);
        return wishList;
    } else {
        return [];
    }
}

const addToWishList = (id) => {
    const stroedWishList = getStroedWishList();
    if (stroedWishList.includes(id)) {
        alert(`${id} Already Exists On Your Read List.`);
    } else {
        stroedWishList.push(id);
        const stroedWishStr = JSON.stringify(stroedWishList);
        localStorage.setItem('wish-list', stroedWishStr);
        alert(`${id} Saved On Wish List.`);
    }
}

export {addToReadList, addToWishList, getStroedReadList, getStroedWishList};