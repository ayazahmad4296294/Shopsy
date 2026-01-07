import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
import { fetchProducts, fetchProductsByCategory } from "../../Api";

const Products = ({ category, limit, title, sortByRating, hideHeader }) => {
    const [products, setProducts] = useState([]);

    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "Women",
            rating: 5.0,
            color: "white",
            aosDelay: "0",
            price: "150",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 2,
            img: Img2,
            title: "Sun Glasses",
            rating: 4.5,
            color: "Red",
            aosDelay: "100",
            price: "120",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 3,
            img: Img3,
            title: "Goggles",
            rating: 4.7,
            color: "brown",
            aosDelay: "200",
            price: "100",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 4,
            img: Img4,
            title: "T-Shirt",
            rating: 4.4,
            color: "Yellow",
            aosDelay: "300",
            price: "220",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 5,
            img: Img2,
            title: "Fashin Shirt",
            rating: 4.5,
            color: "Pink",
            aosDelay: "400",
            price: "180",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ];

    useEffect(() => {
        const loadProducts = async () => {
            let apiProducts = [];
            if (category) {
                apiProducts = await fetchProductsByCategory(category);
            } else {
                apiProducts = await fetchProducts();
            }

            // Map API data to match component structure
            const formattedApiProducts = apiProducts.map((item, index) => ({
                id: item.id + 100, // Offset IDs to avoid conflict
                img: item.image,
                title: item.title,
                rating: item.rating.rate,
                color: item.category,
                aosDelay: (index * 100).toString(),
                price: item.price,
                description: item.description,
            }));

            if (category) {
                setProducts(formattedApiProducts);
            } else {
                setProducts([...ProductsData, ...formattedApiProducts]);
            }
        };
        loadProducts();
    }, [category]);

    let displayProducts = limit ? products.slice(0, limit) : products;

    if (sortByRating) {
        displayProducts = [...displayProducts].sort((a, b) => b.rating - a.rating);
    }

    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header Section */}
                {!hideHeader && (
                    <div className="text-center mb-10 max-w-[600px] mx-auto">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="0"
                            className="text-sm text-primary">
                            Top Selling Products
                        </p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-3xl font-bold">
                            {title ? title : (category ? category.charAt(0).toUpperCase() + category.slice(1) : "Products")}
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi
                        </p>
                    </div>
                )}
                {/* Body Section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>

                        {displayProducts.map((data) => {
                            const slug = data.title.toLowerCase().replace(/ /g, '-');
                            return (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={data.id}
                                    className="flex flex-col h-full bg-white relative shadow-md hover:shadow-xl duration-300 group rounded-xl p-4">
                                    <div className="flex-1">
                                        <Link to={`/product/${slug}`} state={{ data }} className="block cursor-pointer">
                                            <img
                                                src={data.img}
                                                alt=""
                                                className="h-[180px] w-full object-contain rounded-md"
                                            />
                                            <div className="mt-3">
                                                <h3 className="font-semibold text-gray-800">{data.title.substring(0, 15)}...</h3>
                                                <p className="text-sm text-gray-600 line-clamp-2">
                                                    {data.description ? data.description.substring(0, 80) + "..." : "No description"}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="mt-4">
                                        <div className="font-bold text-lg my-2 text-primary">${data.price}</div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-1">
                                                <FaStar className="text-yellow-400" />
                                                <span className="text-sm font-medium text-gray-600">{data.rating}</span>
                                            </div>
                                            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1.5 px-4 rounded-full hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-sm">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products