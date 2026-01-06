import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];
const Footer = () => {
    return (
        <div>
            <div style={BannerImg} className="w-full text-white py-10 px-6 md:px-10 lg:px-20">
                {/* <div style={BannerImg} className="w-full text-white py-10 px-6 md:px-10 lg:px-20"> mb-10 */}
                <div className="grid md:grid-cols-3 lg:grid-cols-3 py-52 pt-5">
                    {/* Company Details */}
                    <div className="mr-10">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src={footerLogo} alt="" className="max-w-[50px]" />
                            Shopsy
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                            beatae ea recusandae blanditiis veritatis.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className="mt-10 md:mt-0 lg:ml-28">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            Quick Links
                        </h1>
                        <ul className="space-y-2">
                            {FooterLinks.map((link) => (
                                <li key={link.title}>
                                    <Link to={link.link} className="text-white hover:text-primary transition-all duration-200">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* social links */}
                    <div className="mt-10 md:mt-0 lg:ml-24">
                        <div className="flex items-center gap-3 mt-3">
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>123 Main St, Anytown, USA</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>+1 123456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer