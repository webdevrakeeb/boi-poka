import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, image, tags, bookName, author, category} = book;
    return (
        <Link to={`/bookdetails/${bookId}`}>
            <div className="p-6 border h-full flex flex-col border-[rgba(19,19,19,0.15)] rounded-2xl">
                <div className="flex-grow">
                    <div className="py-8 bg-[#F3F3F3] rounded-2xl">
                        <img className="h-[166px] block mx-auto" src={image} alt="" />
                    </div>
                    <div className="pt-6 pb-4">
                        <ul className="flex items-center gap-x-3">
                            {
                                tags.map((tag,idx) => <li 
                                    className="py-[7px] px-4 bg-[rgba(35,190,10,0.05)] rounded-[30px] text-[#23BE0A] text-base font-medium"
                                    key={idx}
                                >{tag}</li>)
                            }
                        </ul>
                    </div>
                    <h1 className="text-[#131313] text-2xl font-bold font-playfair capitalize mb-4">{bookName}</h1>
                    <p className="text-[rgba(19,19,19,0.80)] text-base font-medium pb-5">By : {author} </p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t-[2px] border-dashed">
                    <span className="text-[rgba(19,19,19,0.80)] text-base font-medium">{category}</span>
                    <span className="text-[rgba(19,19,19,0.80)] text-base font-medium flex items-center gap-x-2">5.00 <IoIosStarOutline className="text-[20px]"/></span>
                </div>
            </div>
        </Link>
    );
};

export default Book;