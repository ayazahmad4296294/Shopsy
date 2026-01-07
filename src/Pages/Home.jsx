import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import TopProducts from "../Components/Top Products/TopProducts";
import Banner from "../Components/Banner/Banner";
import Subscribe from "../Components/Subscribe/Subscribe";
import Testimonials from "../Components/Testimonials/Testimonials";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="container mt-14 mb-12">
                {/* Section Header Row */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="flex justify-between items-center mb-8 px-4 border-l-4 border-primary">
                    <h2
                        className="text-2xl font-bold tracking-wide">
                        Women's Clothing
                    </h2>
                    <Link
                        to="/products"
                        className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-6 rounded-full hover:scale-105 transition-all duration-300 font-semibold shadow-md text-sm"
                    >
                        View All Products
                    </Link>
                </div>
                <Products category="women's clothing" limit={5} hideHeader={true} />
            </div>
            <TopProducts />
            <Banner />
            <Subscribe />
            <Testimonials />
        </div>
    )
}

export default Home
