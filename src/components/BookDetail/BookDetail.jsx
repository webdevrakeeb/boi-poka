import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const {bookId} = useParams();
    const targetBookId = parseInt(bookId);
    const data = useLoaderData();
    const targetBook = data.find(book => book.bookId === targetBookId);
    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = targetBook;
    return (
        <div className="container pb-9 md:pb-[60px] lg:pb-[100px]">
            <div className="grid gap-y-6 lg:grid-cols-2 gap-x-12">
                <div>
                    <div className="bg-[rgba(19,19,19,0.05)] p-11 md:p-[74px] rounded-2xl w-[300px] md:w-[500px] lg:w-full mx-auto">
                        <img className="w-full" src={image} alt={bookName} />
                    </div>
                </div>
                <div>
                    <h1 className="text-[#131313] text-3xl md:text-[40px] font-bold font-playfair capitalize mb-2">{bookName}</h1>
                    <p className="text-[rgba(19,19,19,0.80)] text-xl font-medium pb-6">By : {author} </p>
                    <p className="text-[rgba(19,19,19,0.80)] text-xl font-medium py-4 border-t-[1px] border-t-[rgba(19,19,19,0.15)] border-b-[1px] border-b-[rgba(19,19,19,0.15)]">{category}</p>
                    <p className="text-[rgba(19,19,19,0.70)] text-base font-normal py-6"><strong className="text-[#131313] font-bold">Review :</strong> {review}</p>
                    <div className="flex items-center gap-x-4 pb-6 border-b-[1px] border-b-[rgba(19,19,19,0.15)]">
                        <p><strong className="text-[#131313] font-bold">Tag</strong></p>
                        <ul className="flex items-center gap-x-3">
                            {
                                tags.map((tag,idx) => <li 
                                    className="py-[7px] px-4 bg-[rgba(35,190,10,0.05)] rounded-[30px] text-[#23BE0A] text-base font-medium"
                                    key={idx}
                                >#{tag}</li>)
                            }
                        </ul>
                    </div>
                    <div className="pt-6">
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex">
                                <span className="w-[200px] inline-block text-[rgba(19,19,19,0.70)]">Number of Pages:</span>
                                <span className="inline-block text-[#131313] font-semibold">{totalPages}</span> 
                            </li>
                            <li>
                                <span className="w-[200px] inline-block text-[rgba(19,19,19,0.70)]">Publisher:</span>
                                <span className="inline-block text-[#131313] font-semibold">{publisher}</span> 
                            </li>
                            <li>
                                <span className="w-[200px] inline-block text-[rgba(19,19,19,0.70)]">Year of Publishing:</span>
                                <span className="inline-block text-[#131313] font-semibold">{yearOfPublishing}</span> 
                            </li>
                            <li>
                                <span className="w-[200px] inline-block text-[rgba(19,19,19,0.70)]">Rating:</span>
                                <span className="inline-block text-[#131313] font-semibold">{rating}</span> 
                            </li>
                        </ul>
                    </div>
                    <div className="dual-btns pt-8">
                        <ul className="flex items-center gap-x-4">
                            <li>
                                <button className="text-[#131313] text-lg font-semibold py-[12px] px-[28px] border border-[rgba(19,19,19,0.30)] rounded-lg">Read</button>
                            </li>
                            <li>
                                <button className="text-white bg-[#50B1C9] text-lg font-semibold py-[12px] px-[28px] rounded-lg">Wishlist</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;