import { toast } from "react-toastify";

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
        toast.error('Already Exists On Your Read List.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast.success('Successfully Added On Read List.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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
        toast.error('Already Exists On Your Wish List.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        stroedWishList.push(id);
        const stroedWishStr = JSON.stringify(stroedWishList);
        localStorage.setItem('wish-list', stroedWishStr);
        toast.success('Successfully Added On Wish List.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}

export {addToReadList, addToWishList, getStroedReadList, getStroedWishList};