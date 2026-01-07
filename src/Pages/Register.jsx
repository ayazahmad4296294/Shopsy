import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = ({ isPopup = false }) => {
    const navigate = useNavigate();
    const { redirectPath } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful! Please login.");
                if (!isPopup) {
                    navigate("/login");
                }
            } else {
                alert(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Registration failed. Is the backend running?");
        }
    };

    return (
        <div className={isPopup ? "" : "min-h-[600px] flex justify-center items-center bg-gray-100 dark:bg-gray-950 px-4 py-12"}>
            <div
                data-aos="fade-up"
                className={isPopup ? "w-full" : "max-w-md w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden p-8"}
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-primary">
                    Create Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium dark:text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-primary transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium dark:text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-primary transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium dark:text-gray-300">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-primary transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-primary transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                {!isPopup && (
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-primary font-bold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Register;
