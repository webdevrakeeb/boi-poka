import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="pl-[15px] pr-[15px] md:pl-0 md:pr-0">
            <div className="container bg-[rgba(19,19,19,0.05)] rounded-3xl py-8 md:py-14 md:px-14 lg:py-20 lg:px-[120px]">
                <div className="flex items-center flex-col gap-y-5 md:flex-row">
                    <div className="md:w-2/3 order-2 md:order-1 text-center md:text-left">
                        <h1 className="text-[#131313] text-3xl mb-6 md:text-[35px] md:mb-6 lg:text-[56px] font-bold md:max-w-[400px] lg:max-w-[526px] font-playfair lg:mb-12 leading-[150%]">Books to freshen up your bookshelf</h1>
                        <Link>
                            <button className="text-white text-base md:text-xl  font-bold py-[15px] px-[20px] md:py-[21px] md:px-7 bg-[#23BE0A] rounded-lg">View The List</button>
                        </Link>
                    </div>
                    <div className="md:w-1/3 order-1 md:order-2">
                        <img className="w-[200px] md:w-full" src="https://i.ibb.co/zTB09Wm2/boi-poka-banner-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;