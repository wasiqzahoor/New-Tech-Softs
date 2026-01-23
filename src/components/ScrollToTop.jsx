import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har baar jab pathname (URL) change hoga, ye function chalega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Aap "smooth" bhi rakh sakte hain, lekin "instant" navigation ke liye behtar hai
    });
  }, [pathname]);

  return null; // Ye component kuch render nahi karega, sirf logic chalayega
};

export default ScrollToTop;