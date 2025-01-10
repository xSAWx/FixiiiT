import { useEffect, useRef, useState } from "react";

export const focusing = (setfocus) => ({
  onFocus: () => {
    setfocus(true);
  },
  onBlur: () => {
    setfocus(false);
  },
});

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const intervalRef = useRef(null); // Store interval ID

  useEffect(() => {
    if (isRunning) {
      // Start the timer when isRunning is true
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1); // Increment seconds every second
      }, 1000);
    } else {
      // Clear the interval when paused
      clearInterval(intervalRef.current);
    }

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, [isRunning]); // Empty dependency array to run only once on mount

  const hours = Math.floor(seconds / 3600); // Convert seconds to hours
  const minutes = Math.floor((seconds % 3600) / 60); // Convert remaining seconds to minutes
  const remainingSeconds = seconds % 60;

  return { hours, minutes, seconds: remainingSeconds, setisRunning, isRunning }; // Return the current seconds
};

export const toDate = (dateString) => {
  const dateObject = new Date(dateString);

  // Format the date as desired
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};

export function UnixBefore(interval, unit = "month", time) {
  const now = time ? new Date(time) : new Date();

  switch (unit) {
    case "month":
      now.setMonth(now.getMonth() - interval);
      break;
    case "year":
      now.setFullYear(now.getFullYear() - interval);
      break;
    case "day":
      now.setDate(now.getDate() - interval);
      break;
    default:
      throw new Error("Invalid unit");
  }

  return Math.floor(now.getTime());
}

export const useScreenWidth = () => {
  const [width, setwidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { width };
};

export const useShowNav = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 220) {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
    } else {
      setShow(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  

  return show;
};

export const useScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return {scrollToTop,showButton}
}