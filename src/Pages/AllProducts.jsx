import React from 'react'
import Products from '../Components/Products/Products'

const AllProducts = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="container py-10 mt-10">
            <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-primary/20 pb-4">
                Full Collection
            </h1>

            <Products sortByRating={true} hideHeader={true} />
        </div>
    )
}

export default AllProducts
