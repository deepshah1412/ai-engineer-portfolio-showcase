
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1 items-center justify-center bg-custom-gray-100">
        <div className="text-center max-w-md px-4">
          <h1 className="text-9xl font-bold text-custom-gray-800 mb-4">404</h1>
          <p className="text-2xl text-custom-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button 
            className="bg-custom-black hover:bg-custom-gray-700 text-white" 
            asChild
          >
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
