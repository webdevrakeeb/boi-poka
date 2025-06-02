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
    const [sort, setSort] = useState('');
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
    },[]);

    // Sorting 
    
    const handleSort = sortType => {
        setSort(sortType);
        if(sortType === 'Rating') {
            const sortedReadList = [...readList].sort((a,b)=> a.rating - b.rating);
            setReadList(sortedReadList);
        } else if (sortType === 'Number of pages') {
            const sortedReadList = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        } else if (sortType === 'Publisher year') {
            const sortedReadList = [...readList].sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedReadList);
        }
    }

    return (
        <div className="container">
            <div className='py-[33px] bg-[rgba(19,19,19,0.05)] rounded-2xl'>
                <h2 className='text-[#131313] text-[28px] font-bold text-center'>Books</h2>
            </div>
            <div className='text-center'>
                <div className='pt-8 pb-7 md:pb-10 lg:pb-14 dropdown'>
                    {/* <button className='text-white text-lg font-semibold py-3 px-5 bg-[#23BE0A] rounded-xl flex items-center gap-x-4 mx-auto'>
                        {sort ? `Sort by ${sort}` : 'Sort By'}
                        <GoChevronDown className='text-2xl'
                    /></button>
                    <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
                        <li><a onClick={()=>handleSort('Rating')}>Rating</a></li>
                        <li onClick={()=>handleSort('Number of pages')}><a>Number of pages</a></li>
                        <li onClick={()=>handleSort('Publisher year')}><a>Publisher year</a></li>
                    </ul> */}
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} role="button" className='text-white text-lg font-semibold py-3 px-5 bg-[#23BE0A] rounded-xl flex items-center gap-x-4 mx-auto'>
                            {sort ? `Sort by ${sort}` : 'Sort By'}
                            <GoChevronDown className='text-2xl'/>
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={()=>handleSort('Rating')}><a>Rating</a></li>
                            <li onClick={()=>handleSort('Number of pages')}><a>Number of pages</a></li>
                            <li onClick={()=>handleSort('Publisher year')}><a>Publisher year</a></li>
                        </ul>
                    </div>
                </div>
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