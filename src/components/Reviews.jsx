import React, { useState, useEffect } from 'react';
import { FaStar, FaUserCircle, FaPaperPlane, FaSpinner, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const API_URL = "http://localhost:5000/api/reviews"; 

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
        className={`text-xs ${index < rating ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" : "text-gray-600"}`} 
      />
    ));
  };

  // Pehle 4 reviews (Jo form ke sath grid mein ayenge)
  const topReviews = reviews.slice(0, 4);
  // Baaki reviews (Jo neeche 5 ki line mein ayenge)
  const bottomReviews = reviews.slice(4);

  return (
    <section className="py-24 bg-[#0d2b45] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
            
            {/* --- Modern Header --- */}
            <div className="text-center mb-20">
                <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-3 block">Wall of Love</span>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                    What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Think</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mb-6"></div>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Trusted by businesses worldwide. We pride ourselves on delivering 
                    exceptional quality and innovative software solutions.
                </p>
            </div>

            {/* --- Main Grid (Top Section) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                
                {/* Modern Form Card (Left - Spans 3 columns) */}
                <div className="lg:col-span-3">
                   <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl sticky top-28 shadow-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                                <FaPaperPlane className="text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white italic">Add Feedback</h3>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="group">
                                <input 
                                    type="text" name="name" value={newReview.name} onChange={handleChange}
                                    placeholder="Your Name" required
                                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-4 focus:border-cyan-400/50 outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>
                             <div className="flex gap-2 justify-center py-2 bg-gray-900/30 rounded-xl border border-gray-700/30">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar 
                                        key={index} 
                                        className={`text-2xl cursor-pointer transition-all hover:scale-110 ${index + 1 <= newReview.rating ? "text-yellow-400" : "text-gray-700"}`}
                                        onClick={() => handleRating(index + 1)}
                                    />
                                ))}
                            </div>
                            <textarea 
                                name="review" value={newReview.review} onChange={handleChange}
                                placeholder="Write your experience..." rows="4" required
                                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-4 focus:border-cyan-400/50 outline-none transition-all placeholder:text-gray-600 resize-none"
                            ></textarea>
                            <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-900/20 active:scale-95">
                                Share Review
                            </button>
                        </form>
                   </div>
                </div>

                {/* Top Reviews Grid (Right - Spans 9 columns, 3 per row) */}
                <div className="lg:col-span-9">
                    {loading ? (
                        <div className="flex items-center justify-center h-full"><FaSpinner className="animate-spin text-4xl text-cyan-500" /></div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {topReviews.map((item) => (
                                <ReviewCard key={item._id} item={item} renderStars={renderStars} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* --- Bottom Grid (Full Width 5 Columns) --- */}
            {!loading && bottomReviews.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {bottomReviews.map((item) => (
                        <ReviewCard key={item._id} item={item} renderStars={renderStars} />
                    ))}
                </div>
            )}
        </div>
    </section>
  );
};

// --- Reusable Modern Review Card Component ---
const ReviewCard = ({ item, renderStars }) => (
    <div className="bg-gray-800/20 backdrop-blur-md border border-gray-700/40 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 group relative flex flex-col justify-between overflow-hidden">
        {/* Quote Icon Background */}
        <FaQuoteRight className="absolute top-4 right-4 text-gray-700/20 text-4xl group-hover:text-cyan-500/10 transition-colors" />
        
        <div>
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border border-gray-600 group-hover:border-cyan-500/50 transition-colors">
                    <FaUserCircle className="text-3xl text-gray-500 group-hover:text-cyan-400/80 transition-colors" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm tracking-wide truncate max-w-[120px]">{item.name}</h4>
                    <div className="flex mt-1">{renderStars(item.rating)}</div>
                </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed italic mb-4 line-clamp-4 group-hover:text-gray-300 transition-colors">
                "{item.review}"
            </p>
        </div>

        <div className="pt-4 border-t border-gray-700/50 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-tighter text-cyan-500/70 font-bold">Verified Project</span>
            <span className="text-[10px] text-gray-600 font-mono">
                {new Date(item.createdAt).toLocaleDateString()}
            </span>
        </div>
    </div>
);

export default Reviews;