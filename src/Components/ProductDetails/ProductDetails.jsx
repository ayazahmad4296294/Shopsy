import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { fetchProducts } from "../../Api";
import Products from "../Products/Products";

const ProductDetails = () => {
    const location = useLocation();
    const { slug } = useParams();
    const [product, setProduct] = useState(location.state?.data || null);
    const [loading, setLoading] = useState(!location.state?.data);

    useEffect(() => {
        if (!product) {
            const loadProduct = async () => {
                setLoading(true);
                try {
                    const allProducts = await fetchProducts();
                    const found = allProducts.find(item =>
                        item.title.toLowerCase().replace(/ /g, '-') === slug
                    );

                    if (found) {
                        setProduct({
                            id: found.id + 100,
                            img: found.image,
                            title: found.title,
                            rating: found.rating.rate,
                            color: found.category,
                            price: found.price,
                            description: found.description,
                        });
                    }
                } catch (error) {
                    console.error("Failed to load product", error);
                } finally {
                    setLoading(false);
                }
            };
            loadProduct();
        }
        // Scroll to top when product changes
        window.scrollTo(0, 0);
    }, [slug, product]);

    if (loading) return <div className="text-center py-20">Loading...</div>;

    if (!product) return <div className="text-center py-20">Product not found</div>;

    return (
        <div className="pt-20">
            <div className="container py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Side - Image */}
                    <div className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-10 h-[400px]">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="max-h-full w-auto object-contain"
                        />
                    </div>

                    {/* Right Side - Details */}
                    <div className="flex flex-col gap-5 text-left">
                        <h1 className="text-3xl font-bold">{product.title}</h1>
                        <div className="flex items-center gap-2 text-lg">
                            <div className="flex text-yellow-500">
                                <FaStar />
                            </div>
                            <span>{product.rating}</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-500 capitalize">{product.color}</span>
                        </div>

                        <div className="text-3xl font-bold text-primary">
                            ${product.price}
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="mt-5">
                            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-5 rounded-full hover:scale-105 font-bold text-lg shadow-lg hover:shadow-primary/50">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="mt-20 mb-20">
                <Products
                    category={product.color}
                    limit={5}
                    title="Similar Products"
                />
            </div>
        </div>
    );
};

export default ProductDetails;
