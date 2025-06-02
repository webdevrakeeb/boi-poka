import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { GoChevronDown } from "react-icons/go";
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStroedReadList, getStroedWishList } from '../Utily/AddToLS';
import ListedBook from './ListedBook';

const ListedBooks = () => {
    // Listed Book Display
    const [readList, setReadList] = useState([]);
    const allListedBooks = useLoaderData();
    useEffect(() => {
        const stroedReadList = getStroedReadList();
        const stroedReadListInt = stroedReadList.map(id => parseInt(id));
        const readBooksList = allListedBooks.filter(book => stroedReadListInt.includes(book.bookId));
        setReadList(readBooksList);
    },[]);

    // Wish List Books Display
    const [wishList, setWishtList] = useState([]);
    useEffect(()=>{
        const stroedWishList = getStroedWishList();
        const stroedWishListInt = stroedWishList.map(id => parseInt(id));
        const wishBooksList = allListedBooks.filter(book => stroedWishListInt.includes(book.bookId));
        setWishtList(wishBooksList);
    },[])

    return (
        <div className="container">
            <div className='py-[33px] bg-[rgba(19,19,19,0.05)] rounded-2xl'>
                <h2 className='text-[#131313] text-[28px] font-bold text-center'>Books</h2>
            </div>
            <div className='pt-8 pb-7 md:pb-10 lg:pb-14'>
                <button className='text-white text-lg font-semibold py-3 px-5 bg-[#23BE0A] rounded-xl flex items-center gap-x-4 mx-auto'>Sort By <GoChevronDown className='text-2xl' /></button>
            </div>
            <div className='pb-10 md:pb-16 lg:pb-32'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='pt-8 flex flex-col gap-y-6'>
                            {
                                readList.map((book, idx) => <ListedBook key={idx} book={book}></ListedBook>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='pt-8 flex flex-col gap-y-6'>
                            {
                                wishList.map((book, idx) => <ListedBook key={idx} book={book}></ListedBook>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            
        </div>
    );
};

export default ListedBooks;