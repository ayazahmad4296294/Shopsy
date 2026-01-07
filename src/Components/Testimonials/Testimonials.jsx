import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Morgan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Jack",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "John",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p
                        data-aos="fade-up"
                        className="text-sm text-primary">
                        What our customers are saying
                    </p>
                    <h1
                        data-aos="fade-up"
                        className="text-3xl font-bold">
                        Testimonials
                    </h1>
                    <p
                        data-aos="fade-up"
                        className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi
                    </p>
                </div>
                {/* Testimonials Card */}
                <div data-aos="fade-up">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div key={data.id} className="my-6">
                                <div
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative h-full min-h-[250px]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="shrink-0">
                                            <img
                                                src={data.img}
                                                alt={data.name}
                                                className="rounded-full w-16 h-16 object-cover border-2 border-primary" />
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-bold text-black/80 dark:text-white">
                                                {data.name}
                                            </h1>
                                            <div className="flex text-yellow-500 text-xs">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                            "{data.text}"
                                        </p>
                                    </div>
                                    <p className="text-primary/10 dark:text-white/5 text-9xl font-serif absolute -bottom-5 right-4 pointer-events-none select-none">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials