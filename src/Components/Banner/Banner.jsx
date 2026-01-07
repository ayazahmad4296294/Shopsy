import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
   return (
      <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
         <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
               {/* Image Section */}
               <div>
                  <img
                     data-aos="fade-up"
                     src={BannerImg}
                     alt=""
                     className="max-w-[400px] h-[350px] md:w-full w-full sm:w-[250px] px-3 mx-auto drop-shadow-[-5px_8px_8px_rgba(0,0,0,0.5)] object-cover"
                  />
               </div>
               {/* text details section */}
               <div className="flex flex-col justify-center gap-6 sm:pt-0 px-3 md:px-0 lg:px-0">
                  <h2
                     data-aos="fade-up"
                     className="text-4xl font-bold mb-1">
                     Winter Sale Upto 50% Off</h2>
                  <p data-aos="fade-up"
                     className="text-lg mb-2 lg:pr-16">Discover the latest fashion trends and shop the best quality products at the best prices.</p>

                  {/* Icons (Qualities) */}
                  <div className="flex flex-col gap-4">
                     <div data-aos="fade-up" className="flex items-center gap-3">
                        <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Quality Products</p>
                     </div>
                     <div data-aos="fade-up" className="flex items-center gap-3">
                        <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                        <p>Fast Delivery</p>
                     </div>
                     <div data-aos="fade-up" className="flex items-center gap-3">
                        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                        <p>Easy Payment method</p>
                     </div>
                     <div data-aos="fade-up" className="flex items-center gap-3">
                        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                        <p>Get Offers</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner