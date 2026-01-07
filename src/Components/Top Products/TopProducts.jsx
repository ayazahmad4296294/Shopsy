import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa6";

const TopProducts = () => {
   const ProductsData = [
      {
         id: 1,
         img: Img1,
         title: "Casual Wear",
         description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         aosDelay: "0",
      },
      {
         id: 2,
         img: Img2,
         title: "Printed shirt",
         description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         aosDelay: "100",
      },
      {
         id: 3,
         img: Img3,
         title: "Women shirt",
         description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         aosDelay: "200",
      },
   ];

   return (
      <div>
         <div className='container'>
            {/* Header Section */}
            <div className="text-left mb-8">
               <p
                  data-aos="fade-up"
                  className="text-sm text-primary">
                  Top Rated Products for you
               </p>
               <h1
                  data-aos="fade-up"
                  className="text-3xl font-bold">
                  Best Products
               </h1>
               <p
                  data-aos="fade-up"
                  className="text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi
               </p>
            </div>
            {/* Body Section */}
            <div
               className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
               {ProductsData.map((data) => (
                  <div key={data.id}
                     data-aos="fade-up"
                     data-aos-delay={data.aosDelay}
                     className="relative rounded-2xl shadow-md hover:shadow-xl duration-300 group max-w-[300px]">
                     {/* image section */}
                     <div className="h-[100px]">
                        <img
                           src={data.img}
                           alt=""
                           className="max-w-[140px] block mx-auto mt-4 duration-300 drop-shadow-md"
                        />
                     </div>
                     {/* details section */}
                     <div className="p-4 mt-20 text-center">

                        {/* ratings */}
                        <div className="w-full flex items-center justify-center gap-1">
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                        </div>

                        <h1 className="text-xl font-bold">{data.title}</h1>
                        <p className="text-gray-500 duration-300 text-sm line-clamp-2">
                           {data.description}
                        </p>
                        <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full mt-4"
                        // onClick={handleOrderPopup}
                        >
                           Order Now
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TopProducts