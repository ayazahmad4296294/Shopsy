import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Components/Products/Products";

const CategoryProducts = () => {
    const { category } = useParams();

    return (
        <div className="pt-20">
            <Products
                category={category}
                title={`${category.charAt(0).toUpperCase() + category.slice(1)} Collection`}
            />
        </div>
    );
};

export default CategoryProducts;
