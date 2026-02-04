import React, { useState, useEffect } from 'react';
import { FaStar, FaUserCircle, FaPaperPlane, FaSpinner, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const API_URL = "https://new-tech-softs-backend.onrender.com/api/reviews"; 

  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    rating: 5
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setReviews(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleRating = (ratingValue) => {
    setNewReview({ ...newReview, rating: ratingValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        setNewReview({ name: '', review: '', rating: 5 });
        fetchReviews();
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`text-[10px] ${index < rating ? "text-cyan-400 drop-shadow-[0_0_3px_rgba(34,211,238,0.8)]" : "text-gray-600"}`} 
      />
    ));
  };

  return (
    <section className="py-24 bg-[#0d2b45] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
            
            {/* --- Modern Header --- */}
            <div className="text-center mb-16">
                <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-3 block">User Feedback</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Excellence</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base">
                    Real stories from real clients. We don't just write code, we build trust.
                </p>
            </div>

            {/* --- Main Grid System --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* REVIEWS LIST (LEFT - Spans 8 or 9 columns) */}
                <div className="lg:col-span-8 xl:col-span-9 order-2 lg:order-1">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <FaSpinner className="animate-spin text-4xl text-cyan-500" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {reviews.map((item) => (
                                <ReviewCard key={item._id} item={item} renderStars={renderStars} />
                            ))}
                        </div>
                    )}
                </div>

                {/* STICKY FORM (RIGHT - Spans 4 or 3 columns) */}
                <div className="lg:col-span-4 xl:col-span-3 order-1 lg:order-2 sticky top-28">
                   <div className="bg-gray-800/40 backdrop-blur-2xl border border-gray-700/60 p-8 rounded-[2rem] shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                                <FaPaperPlane className="text-cyan-400 text-sm" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Post Review</h3>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input 
                                type="text" name="name" value={newReview.name} onChange={handleChange}
                                placeholder="Your Full Name" required
                                className="w-full bg-[#0d2b45]/60 border border-gray-700 text-white rounded-2xl p-4 focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
                            />

                             <div className="flex flex-col items-center py-3 bg-[#0d2b45]/40 rounded-2xl border border-gray-700/50">
                                <span className="text-[10px] text-gray-500 uppercase mb-2">Rating Scale</span>
                                <div className="flex gap-2">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar 
                                            key={index} 
                                            className={`text-2xl cursor-pointer transition-all hover:scale-120 ${index + 1 <= newReview.rating ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" : "text-gray-700"}`}
                                            onClick={() => handleRating(index + 1)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <textarea 
                                name="review" value={newReview.review} onChange={handleChange}
                                placeholder="Describe your project experience..." rows="5" required
                                className="w-full bg-[#0d2b45]/60 border border-gray-700 text-white rounded-2xl p-4 focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-500 resize-none text-sm"
                            ></textarea>

                            <button type="submit" className="w-full bg-gradient-to-br from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-white font-bold py-4 rounded-2xl transition-all active:scale-95 text-sm uppercase tracking-widest">
                                Submit Feedback
                            </button>
                        </form>
                   </div>
                </div>

            </div>
        </div>
    </section>
  );
};

// --- Enhanced Card Component ---
const ReviewCard = ({ item, renderStars }) => (
    <div className="bg-gray-700/30 backdrop-blur-md border border-gray-600/30 p-6 rounded-3xl hover:border-cyan-500/40 transition-all duration-500 group relative flex flex-col justify-between h-full shadow-lg">
        <FaQuoteRight className="absolute top-5 right-5 text-cyan-500/10 text-3xl group-hover:text-cyan-500/20 transition-colors" />
        
        <div>
            <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600 group-hover:border-cyan-500/50 transition-colors">
                    <FaUserCircle className="text-2xl text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="overflow-hidden">
                    <h4 className="text-white font-bold text-xs tracking-wide truncate">{item.name}</h4>
                    <div className="flex mt-0.5">{renderStars(item.rating)}</div>
                </div>
            </div>
            
            <p className="text-gray-300 text-[13px] leading-relaxed italic mb-6 line-clamp-5">
                "{item.review}"
            </p>
        </div>

        <div className="pt-4 border-t border-gray-600/30 flex justify-between items-center">
            <span className="text-[9px] font-mono text-cyan-400/80 uppercase">Verified Client</span>
            <span className="text-[9px] text-gray-500 font-mono">
                {new Date(item.createdAt).toLocaleDateString()}
            </span>
        </div>
    </div>
);

export default Reviews;