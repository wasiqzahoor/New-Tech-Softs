import React from 'react';
import { FaStar } from 'react-icons/fa';

// Yeh raha aapka updated real data structure
const reviewsData = [
    { name: "BigLou", role: "Software Optimizer", text: "New Tech Softs developed a robust Windows tweaking utility for us. The project delivery was flawless and the performance boost is significant.", rating: 5 },
    { name: "Lana Houts", role: "Podcast Host @ The AI Chicks", text: "The AI Chicks website and podcast platform built by New Tech Softs have exceeded our expectations. Their technical expertise is impressive.", rating: 5 },
    { name: "Mudassir", role: "Fiverr Expert", text: "I've worked with many teams, but New Tech Softs stands out for their efficiency and top-notch code quality. Highly professional.", rating: 5 },
    { name: "Usama Saqlain", role: "Small Business Owner @ Hekta Solutions", text: "New Tech Softs took our tech academy to the next level. Their custom web solutions perfectly fit our business requirements.", rating: 5 }
];

const Reviews = () => {
    return (
        <section className="py-16 bg-white max-w-7xl mx-auto px-4">
            {/* Header */}
            <h2 className="text-5xl font-extrabold text-gray-900 mb-2">WHAT MY CLIENTS SAY</h2>
            <div className="flex items-center gap-2 mb-8">
                
            </div>
            <p className="text-gray-600 mb-12 max-w-lg">
                Trusted by industry leaders and experts. Here’s what my clients have shared about their successful collaborations with New Tech Softs.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Dynamically Mapping the Reviews */}
                {reviewsData.map((rev, index) => (
                    <ReviewCard 
                        key={index}
                        text={rev.text}
                        name={rev.name} 
                        role={rev.role} 
                        rating={rev.rating} 
                    />
                ))}

                {/* Stats Cards (Keep these static as per your previous request) */}
                <StatCard title="I’ve worked with 50+ happy clients" value="98%" label="Satisfaction Rate" bgColor="bg-gray-800" textColor="text-white" />
                <StatCard title="My work helped clients grow their revenue by 200%" value="200%" label="Growth" bgColor="bg-indigo-600" textColor="text-white" />
            </div>
        </section>
    );
};

const ReviewCard = ({ text, name, role, rating }) => (
    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
        <div className="flex text-indigo-500 mb-4">
            {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
        </div>
        <p className="text-gray-700 mb-6 min-h-[100px]">{text}</p>
        <div className="flex items-center gap-3">
            <img src={`https://ui-avatars.com/api/?name=${name}`} alt={name} className="w-10 h-10 rounded-full" />
            <div>
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </div>
);

const StatCard = ({ title, value, label, bgColor, textColor }) => (
    <div className={`${bgColor} ${textColor} p-8 rounded-2xl`}>
        <p className="mb-4 opacity-80">{title}</p>
        <h3 className="text-6xl font-bold mb-1">{value}</h3>
        <p className="font-medium">{label}</p>
    </div>
);

export default Reviews;