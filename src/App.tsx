
import logo from './assets/logo.png'; // Adjust the path if needed
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Home, Users, Bot, Sparkles, Check, ArrowRight, Star, Zap, Shield, Heart, Instagram, Twitter, Linkedin, ArrowUp, MessageCircle, MapPin, Clock, UserPlus, LogIn, CheckCircle, Search, Handshake, Timer, Building, Brain, Lock, User, Smartphone, Monitor, Building2, UserCheck, Key, Bed, Wifi, Car, Menu, X, Phone, MapPin as Location, HelpCircle, Info } from 'lucide-react';

// Housing-themed floating elements
const HousingFloatingElement = ({ className, delay = 0, children, type = 'default' }: { 
  className: string; 
  delay?: number; 
  children?: React.ReactNode;
  type?: 'house' | 'people' | 'amenity' | 'default';
}) => {
  const getElement = () => {
    switch (type) {
      case 'house':
        return <Building2 className="w-6 h-6 text-brand-accent/30 dark:text-brand-dark-primary/40" />;
      case 'people':
        return <Users className="w-5 h-5 text-brand-highlight/40 dark:text-brand-dark-secondary/50" />;
      case 'amenity':
        return <Wifi className="w-4 h-4 text-brand-primary/35 dark:text-brand-dark-primary/45" />;
      default:
        return children || <div className="w-2 h-2 bg-gradient-to-r from-brand-accent to-brand-highlight rounded-full opacity-20 dark:from-brand-dark-primary dark:to-brand-dark-secondary"></div>;
    }
  };

  return (
    <div 
      className={`absolute animate-float ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: '8s'
      }}
    >
      {getElement()}
    </div>
  );
};

// Housing community illustration component
const CommunityIllustration = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Main building cluster */}
    <div className="flex items-end justify-center space-x-2">
      {/* Building 1 */}
      <div className="w-12 h-16 bg-gradient-to-t from-brand-primary/20 to-brand-accent/30 rounded-t-lg relative">
        <div className="absolute top-2 left-2 w-2 h-2 bg-brand-highlight/50 rounded-sm"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-brand-highlight/50 rounded-sm"></div>
        <div className="absolute top-6 left-2 w-2 h-2 bg-brand-highlight/50 rounded-sm"></div>
        <div className="absolute top-6 right-2 w-2 h-2 bg-brand-highlight/50 rounded-sm"></div>
      </div>
      
      {/* Building 2 (taller) */}
      <div className="w-14 h-20 bg-gradient-to-t from-brand-accent/25 to-brand-highlight/35 rounded-t-lg relative">
        <div className="absolute top-2 left-2 w-2 h-2 bg-brand-primary/60 rounded-sm"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-brand-primary/60 rounded-sm"></div>
        <div className="absolute top-6 left-2 w-2 h-2 bg-brand-primary/60 rounded-sm"></div>
        <div className="absolute top-6 right-2 w-2 h-2 bg-brand-primary/60 rounded-sm"></div>
        <div className="absolute top-10 left-2 w-2 h-2 bg-brand-primary/60 rounded-sm"></div>
        <div className="absolute top-10 right-2 w-2 h-2 bg-brand-primary/60 rounded-sm"></div>
      </div>
      
      {/* Building 3 */}
      <div className="w-10 h-14 bg-gradient-to-t from-brand-highlight/20 to-brand-primary/30 rounded-t-lg relative">
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-brand-accent/50 rounded-sm"></div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-accent/50 rounded-sm"></div>
        <div className="absolute top-6 left-2 w-1.5 h-1.5 bg-brand-accent/50 rounded-sm"></div>
        <div className="absolute top-6 right-2 w-1.5 h-1.5 bg-brand-accent/50 rounded-sm"></div>
      </div>
    </div>
    
    {/* People icons around buildings */}
    <div className="absolute -bottom-2 -left-4">
      <div className="w-6 h-6 bg-brand-highlight/40 rounded-full flex items-center justify-center">
        <User className="w-3 h-3 text-white" />
      </div>
    </div>
    <div className="absolute -bottom-2 -right-4">
      <div className="w-6 h-6 bg-brand-accent/40 rounded-full flex items-center justify-center">
        <User className="w-3 h-3 text-white" />
      </div>
    </div>
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
      <div className="w-5 h-5 bg-brand-primary/40 rounded-full flex items-center justify-center">
        <Heart className="w-2 h-2 text-white" />
      </div>
    </div>
  </div>
);

// Room amenities floating icons
const AmenityIcon = ({ icon: Icon, className, delay = 0 }: { icon: any; className: string; delay?: number }) => (
  <div 
    className={`absolute animate-float ${className}`}
    style={{ 
      animationDelay: `${delay}ms`,
      animationDuration: '10s'
    }}
  >
    <div className="w-8 h-8 bg-white/10 dark:bg-brand-dark-card/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 dark:border-brand-dark-border/30">
      <Icon className="w-4 h-4 text-brand-accent/60 dark:text-brand-dark-primary/70" />
    </div>
  </div>
);

// Floating animation component for background elements
const FloatingElement = ({ className, delay = 0, children }: { 
  className: string; 
  delay?: number; 
  children?: React.ReactNode;
}) => (
  <div 
    className={`absolute animate-float ${className}`}
    style={{ 
      animationDelay: `${delay}ms`,
      animationDuration: '6s'
    }}
  >
    {children || <div className="w-2 h-2 bg-gradient-to-r from-brand-accent to-brand-highlight rounded-full opacity-20 dark:from-brand-dark-primary dark:to-brand-dark-secondary"></div>}
  </div>
);

// Demo Modal Component
const DemoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const demoSteps = [
    {
      title: "Create Your Profile",
      subtitle: "Tell us about yourself and preferences",
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Alex Kumar</h3>
            <p className="text-gray-600 dark:text-gray-300">Software Engineer</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Budget Range</span>
                <span className="font-semibold text-brand-primary">₹15,000 - ₹25,000</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Preferred Location</span>
                <span className="font-semibold text-brand-primary">Koramangala, Bangalore</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Room Type</span>
                <span className="font-semibold text-brand-primary">Single Occupancy</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Finds Perfect Matches",
      subtitle: "Our AI analyzes thousands of options for you",
      content: (
        <div className="space-y-4">
          {[
            {
              image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Modern PG in Koramangala",
              price: "₹18,000/month",
              rating: 4.8,
              match: "95%",
              amenities: ["WiFi", "AC", "Parking", "Laundry"]
            },
            {
              image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Cozy Flat Share",
              price: "₹22,000/month",
              rating: 4.6,
              match: "88%",
              amenities: ["WiFi", "Kitchen", "Gym", "Security"]
            }
          ].map((property, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex space-x-4">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800 dark:text-white">{property.title}</h4>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {property.match} Match
                    </span>
                  </div>
                  <p className="text-brand-primary font-bold mb-2">{property.price}</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(property.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{property.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {property.amenities.map((amenity, i) => (
                      <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Connect with Roommates",
      subtitle: "Chat with verified, compatible roommates",
      content: (
        <div className="space-y-4">
          {[
            {
              name: "Priya Sharma",
              profession: "Marketing Manager",
              interests: ["Reading", "Yoga", "Cooking"],
              compatibility: "92%",
              image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
              name: "Rahul Gupta",
              profession: "Data Analyst",
              interests: ["Gaming", "Movies", "Fitness"],
              compatibility: "87%",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
          ].map((roommate, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <img 
                  src={roommate.image} 
                  alt={roommate.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-800 dark:text-white">{roommate.name}</h4>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {roommate.compatibility} Compatible
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{roommate.profession}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {roommate.interests.map((interest, i) => (
                      <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-brand-primary text-white text-sm py-2 px-3 rounded-lg hover:bg-brand-accent transition-colors">
                      <MessageCircle className="w-4 h-4 inline mr-1" />
                      Chat
                    </button>
                    <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Book Your Perfect Home",
      subtitle: "Secure your spot with verified booking",
      content: (
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 dark:text-gray-300">Modern PG in Koramangala</p>
          </div>
          
          <div className="space-y-3">
            {[
              "Identity Verification Complete",
              "Payment Processing Secure",
              "Move-in Date Scheduled",
              "Welcome Kit Prepared"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Move-in Date</span>
              <span className="font-semibold text-brand-primary">March 15, 2025</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setProgress((currentStep + 1) / demoSteps.length * 100);
    }
  }, [currentStep, isOpen]);

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-brand-dark-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-brand-dark-border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-brand-heading dark:text-brand-dark-heading font-poppins">
              Try ApanaGhr Demo
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-brand-primary to-brand-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} of {demoSteps.length}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-brand-heading dark:text-brand-dark-heading mb-2 font-poppins">
              {demoSteps[currentStep].title}
            </h3>
            <p className="text-brand-body dark:text-brand-dark-body font-open-sans">
              {demoSteps[currentStep].subtitle}
            </p>
          </div>
          
          <div className="animate-fade-in">
            {demoSteps[currentStep].content}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-brand-dark-border flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
          >
            Previous
          </button>
          
          <div className="flex space-x-2">
            {demoSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep 
                    ? 'bg-brand-primary' 
                    : index < currentStep 
                      ? 'bg-brand-accent' 
                      : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          {currentStep < demoSteps.length - 1 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-lg hover:from-brand-accent hover:to-brand-highlight transition-all duration-300 font-poppins"
            >
              Next
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-poppins"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Feature card component with illustrations
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0,
  illustration
}: { 
  icon: any; 
  title: string; 
  description: string;
  delay?: number;
  illustration: string;
}) => (
  <div 
    className="group relative p-8 rounded-3xl bg-white/90 dark:bg-brand-dark-card/90 backdrop-blur-sm border border-brand-border/30 dark:border-brand-dark-border/30 hover:bg-white dark:hover:bg-brand-dark-card transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-primary/20 animate-slide-up overflow-hidden"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
      <div className="absolute top-4 right-4 w-20 h-20 border border-brand-accent/20 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border border-brand-highlight/20 rounded-full"></div>
    </div>

    {/* Illustration Area */}
    <div className="relative mb-6 h-32 flex items-center justify-center">
      <div className="relative">
        {/* Main illustration background */}
        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-700 shadow-xl ${illustration}`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
        
        {/* Floating elements around illustration */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-highlight rounded-full flex items-center justify-center group-hover:animate-bounce">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-brand-accent rounded-full opacity-80 group-hover:scale-125 transition-transform duration-500"></div>
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-brand-heading dark:text-brand-dark-heading mb-4 font-poppins text-center group-hover:text-brand-primary dark:group-hover:text-brand-dark-primary transition-colors duration-500">
        {title}
      </h3>
      <p className="text-brand-body dark:text-brand-dark-body leading-relaxed font-open-sans text-center group-hover:text-brand-heading dark:group-hover:text-brand-dark-heading transition-colors duration-500">
        {description}
      </p>
    </div>

    {/* Hover overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
  </div>
);

// How It Works Step Component with Device Mockup
const HowItWorksStep = ({ 
  step, 
  title, 
  description, 
  icon: Icon, 
  mockupType = 'phone',
  delay = 0,
  isLast = false 
}: {
  step: number;
  title: string;
  description: string;
  icon: any;
  mockupType?: 'phone' | 'desktop';
  delay?: number;
  isLast?: boolean;
}) => {
  const MockupFrame = ({ children }: { children: React.ReactNode }) => {
    if (mockupType === 'desktop') {
      return (
        <div className="relative mx-auto max-w-sm">
          {/* MacBook Frame */}
          <div className="bg-gray-800 rounded-t-xl p-2">
            <div className="flex space-x-1 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              {children}
            </div>
          </div>
          <div className="bg-gray-700 h-4 rounded-b-xl"></div>
          <div className="bg-gray-600 h-1 w-16 mx-auto rounded-b-lg"></div>
        </div>
      );
    }

    return (
      <div className="relative mx-auto max-w-xs">
        {/* iPhone Frame */}
        <div className="bg-black rounded-3xl p-2 shadow-2xl">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Notch */}
            <div className="bg-black h-6 w-32 mx-auto rounded-b-2xl mb-2"></div>
            {children}
            {/* Home indicator */}
            <div className="bg-gray-300 h-1 w-32 mx-auto rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    );
  };

  const MockupContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-4 h-64 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-brand-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Create Profile</h4>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-2">
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="bg-white rounded-lg p-2">
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="bg-white rounded-lg p-2">
                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-4 h-64 bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">AI Matching</h4>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg p-2 text-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-4 h-64 bg-gradient-to-br from-green-50 to-green-100">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Connect & Chat</h4>
            </div>
            <div className="space-y-2">
              <div className="bg-brand-primary text-white rounded-lg p-2 ml-8">
                <div className="h-2 bg-white/50 rounded w-3/4"></div>
              </div>
              <div className="bg-white rounded-lg p-2 mr-8">
                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="bg-brand-primary text-white rounded-lg p-2 ml-8">
                <div className="h-2 bg-white/50 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="p-4 h-64 bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Move In</h4>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Check className="w-4 h-4 text-green-500" />
                <div className="h-2 bg-gray-200 rounded flex-1"></div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Check className="w-4 h-4 text-green-500" />
                <div className="h-2 bg-gray-200 rounded flex-1"></div>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <div className="h-2 bg-gray-200 rounded flex-1"></div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="p-4 h-64 bg-gray-100"></div>;
    }
  };

  return (
    <div 
      className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Step Content */}
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl mb-4 shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full mb-2">
            Step {step}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-brand-heading dark:text-brand-dark-heading mb-4 font-poppins">
          {title}
        </h3>
        
        <p className="text-brand-body dark:text-brand-dark-body leading-relaxed font-open-sans max-w-md mx-auto lg:mx-0">
          {description}
        </p>
      </div>

      {/* Device Mockup */}
      <div className="flex-1 flex justify-center">
        <MockupFrame>
          <MockupContent />
        </MockupFrame>
      </div>

      {/* Arrow (hidden on last step) */}
      {!isLast && (
        <div className="hidden lg:block">
          <ArrowRight className="w-8 h-8 text-brand-accent opacity-50" />
        </div>
      )}
    </div>
  );
};

// Why Choose Card Component
const WhyChooseCard = ({ 
  icon: Icon, 
  title, 
  description,
  color,
  delay = 0
}: { 
  icon: any; 
  title: string; 
  description: string;
  color: string;
  delay?: number;
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-100 dark:border-blue-800/30',
      iconBg: 'bg-blue-500',
      iconHover: 'group-hover:bg-blue-600',
      title: 'text-blue-700 dark:text-blue-300',
      shadow: 'hover:shadow-blue-500/20',
      glow: 'group-hover:shadow-blue-500/30'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-100 dark:border-green-800/30',
      iconBg: 'bg-green-500',
      iconHover: 'group-hover:bg-green-600',
      title: 'text-green-700 dark:text-green-300',
      shadow: 'hover:shadow-green-500/20',
      glow: 'group-hover:shadow-green-500/30'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-100 dark:border-purple-800/30',
      iconBg: 'bg-purple-500',
      iconHover: 'group-hover:bg-purple-600',
      title: 'text-purple-700 dark:text-purple-300',
      shadow: 'hover:shadow-purple-500/20',
      glow: 'group-hover:shadow-purple-500/30'
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-100 dark:border-orange-800/30',
      iconBg: 'bg-orange-500',
      iconHover: 'group-hover:bg-orange-600',
      title: 'text-orange-700 dark:text-orange-300',
      shadow: 'hover:shadow-orange-500/20',
      glow: 'group-hover:shadow-orange-500/30'
    }
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses];

  return (
    <div 
      className={`group relative p-6 rounded-2xl ${colorClass.bg} border ${colorClass.border} hover:scale-[1.03] transition-all duration-500 ${colorClass.shadow} ${colorClass.glow} hover:shadow-xl animate-slide-up backdrop-blur-sm overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <div className="w-full h-full border-2 border-current rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
      </div>

      <div className={`w-12 h-12 ${colorClass.iconBg} ${colorClass.iconHover} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto relative z-10`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-lg font-semibold ${colorClass.title} mb-3 font-poppins text-center relative z-10`}>{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-open-sans text-center relative z-10">{description}</p>
    </div>
  );
};

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 10,
    minutes: 55,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center group">
      <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
        <span className="text-xl font-bold text-white font-poppins">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs font-medium text-brand-body dark:text-brand-dark-body font-open-sans">
        {label}
      </span>
    </div>
  );

  return (
    <div className="text-center animate-slide-up" style={{ animationDelay: '1000ms' }}>
      <div className="inline-flex items-center space-x-2 mb-6">
        <Clock className="w-4 h-4 text-brand-accent" />
        <h3 className="text-lg font-semibold text-brand-heading dark:text-brand-dark-heading font-poppins">
          Launching in:
        </h3>
      </div>
      <div className="flex justify-center space-x-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [isFooterSubmitted, setIsFooterSubmitted] = useState(false);

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail) {
      setIsFooterSubmitted(true);
      console.log('Footer email submitted:', footerEmail);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 group">
  <img
    src={logo}
    alt="ApanaGhr Logo"
    className="w-10 h-10 rounded-xl shadow-lg object-contain bg-white"
    style={{ background: 'none' }}
  />
  <span className="text-2xl font-bold text-brand-heading dark:text-brand-dark-heading font-poppins">ApanaGhr</span>
</div>
            <p className="text-gray-300 font-open-sans text-sm leading-relaxed mb-6">
              Finding your perfect living space made simple and secure.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold font-poppins mb-4">Company</h3>
            <ul className="space-y-3 font-open-sans text-sm">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-base font-semibold font-poppins mb-4">Support</h3>
            <ul className="space-y-3 font-open-sans text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-base font-semibold font-poppins mb-4">Stay Updated</h3>
            {!isFooterSubmitted ? (
              <form onSubmit={handleFooterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-highlight focus:border-transparent transition-all duration-300 font-open-sans"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm bg-white text-brand-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 font-poppins"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-lg bg-brand-highlight/20 border border-brand-highlight/30 flex items-center space-x-2">
                <Check className="w-4 h-4 text-brand-highlight" />
                <span className="text-brand-highlight font-open-sans text-sm">
                  Thanks for subscribing!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-open-sans text-xs mb-3 md:mb-0">
            © 2025 ApanaGhr. All rights reserved.
          </p>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 bg-brand-highlight rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-white group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced form submission with loading state
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setIsLoading(false);
      console.log('Email submitted:', email);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSignup = () => {
    console.log('Signup clicked');
    // Add signup logic here
  };

  const handleLogin = () => {
    console.log('Login clicked');
    // Add login logic here
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-brand-background dark:bg-brand-dark-background transition-all duration-700 relative overflow-hidden">
        
        {/* Enhanced Housing-Themed Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Housing and Building Elements */}
          <HousingFloatingElement className="top-20 left-10" delay={0} type="house" />
          <HousingFloatingElement className="top-32 right-20" delay={1500} type="people" />
          <HousingFloatingElement className="top-60 left-1/4" delay={3000} type="house" />
          <HousingFloatingElement className="bottom-40 right-10" delay={4500} type="people" />
          <HousingFloatingElement className="bottom-20 left-1/3" delay={6000} type="house" />
          
          {/* Amenity Icons */}
          <AmenityIcon icon={Wifi} className="top-40 left-1/2" delay={1000} />
          <AmenityIcon icon={Car} className="top-80 right-1/4" delay={2500} />
          <AmenityIcon icon={Bed} className="bottom-60 left-1/5" delay={4000} />
          <AmenityIcon icon={Key} className="bottom-32 right-1/3" delay={5500} />
          
          {/* Community Illustration - Central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-5">
            <CommunityIllustration className="animate-pulse-slow" />
          </div>
          
          {/* Connection Lines (representing matching) */}
          <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-brand-accent/20 to-transparent transform rotate-45 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-l from-brand-highlight/20 to-transparent transform -rotate-45 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          
          {/* Interactive mouse follower gradient */}
          <div 
            className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-brand-accent/5 via-brand-highlight/5 to-brand-primary/5 blur-3xl pointer-events-none transition-all duration-1000 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
          
          {/* Additional housing-themed decorative elements */}
          <div className="absolute top-16 right-1/3 w-16 h-16 border-2 border-brand-accent/10 rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-24 left-1/4 w-12 h-12 border-2 border-brand-highlight/15 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Enhanced Header with Navigation */}
        <header className="relative z-10 p-4 animate-fade-in">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
           <div className="flex items-center space-x-2 group">
  <img
    src={logo}
    alt="ApanaGhr Logo"
    className="w-10 h-10 rounded-xl shadow-lg object-contain bg-white"
    style={{ background: 'none' }}
  />
  <span className="text-2xl font-bold text-brand-heading dark:text-brand-dark-heading font-poppins">ApanaGhr</span>
</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a 
                href="#features" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                className="text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
                className="text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium"
              >
                How It Works
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium"
              >
                Contact
              </a>
            </nav>
            
            {/* Right Side - Auth Buttons + Dark Mode Toggle + Mobile Menu */}
            <div className="flex items-center space-x-3">
              

              {/* Login Button - Desktop */}
              <button
                onClick={handleLogin}
                className="hidden lg:flex items-center space-x-2 px-4 py-2 text-sm text-brand-heading dark:text-brand-dark-heading hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>

              {/* Signup Button - Desktop */}
              <button
                onClick={handleSignup}
                className="hidden lg:flex items-center space-x-2 px-4 py-2 text-sm bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-lg hover:from-brand-accent hover:to-brand-highlight transition-all duration-300 transform hover:scale-105 shadow-lg font-poppins"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl bg-white/20 dark:bg-brand-dark-card/20 backdrop-blur-sm border border-brand-border/30 dark:border-brand-dark-border/30 hover:bg-white/30 dark:hover:bg-brand-dark-card/30 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-brand-heading" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 rounded-xl bg-white/20 dark:bg-brand-dark-card/20 backdrop-blur-sm border border-brand-border/30 dark:border-brand-dark-border/30 hover:bg-white/30 dark:hover:bg-brand-dark-card/30 transition-all duration-300 shadow-lg"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-brand-heading dark:text-brand-dark-heading" />
                ) : (
                  <Menu className="w-5 h-5 text-brand-heading dark:text-brand-dark-heading" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-brand-dark-card/95 backdrop-blur-sm border-t border-brand-border/30 dark:border-brand-dark-border/30 shadow-xl animate-slide-up">
              <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
                <a 
                  href="#features" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                  className="flex items-center space-x-3 text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium py-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Features</span>
                </a>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('how-it-works');
                  }}
                  className="flex items-center space-x-3 text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium py-2"
                >
                  <Info className="w-4 h-4" />
                  <span>How It Works</span>
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="flex items-center space-x-3 text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium py-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>About</span>
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="flex items-center space-x-3 text-brand-body dark:text-brand-dark-body hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors duration-300 font-poppins font-medium py-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
                
                <div className="border-t border-brand-border/30 dark:border-brand-dark-border/30 pt-4 space-y-3">
                  <button
                    onClick={() => {
                      setShowDemo(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg font-poppins"
                  >
                    <Monitor className="w-4 h-4" />
                    <span>Try Demo</span>
                  </button>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        handleLogin();
                        setMobileMenuOpen(false);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm border border-brand-border dark:border-brand-dark-border text-brand-heading dark:text-brand-dark-heading hover:bg-brand-primary hover:text-white dark:hover:bg-brand-dark-primary transition-all duration-300 rounded-lg font-poppins font-medium"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                    <button
                      onClick={() => {
                        handleSignup();
                        setMobileMenuOpen(false);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-lg hover:from-brand-accent hover:to-brand-highlight transition-all duration-300 shadow-lg font-poppins"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Sign Up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Demo Modal */}
        <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />

        {/* Main Content */}
        <main className="relative z-10 pt-6 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Hero Section */}
            <div className="text-center mb-20 animate-fade-in">
              {/* AI Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 dark:from-brand-dark-primary/20 dark:to-brand-dark-secondary/20 px-4 py-2 rounded-full mb-6 border border-brand-accent/20 dark:border-brand-dark-primary/30 animate-bounce-slow">
                <Bot className="w-4 h-4 text-brand-accent dark:text-brand-dark-primary" />
                <span className="text-xs font-semibold text-brand-primary dark:text-brand-dark-primary font-poppins">AI-Powered Platform</span>
                <Sparkles className="w-4 h-4 text-brand-highlight dark:text-brand-dark-secondary" />
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-brand-heading dark:text-brand-dark-heading mb-6 leading-tight font-poppins animate-slide-up">
                Coming Soon:
                <span className="block bg-gradient-to-r from-brand-primary via-brand-accent to-brand-highlight bg-clip-text text-transparent animate-pulse-slow">
                  Smarter Room & Roommate Matching
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-brand-body dark:text-brand-dark-body mb-8 max-w-3xl mx-auto leading-relaxed font-open-sans animate-slide-up" style={{ animationDelay: '200ms' }}>
                Find PGs, Flats, and Compatible Roommates – Powered by AI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <button
                  onClick={() => setShowDemo(true)}
                  className="flex items-center space-x-2 px-8 py-4 text-lg bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-xl hover:from-brand-accent hover:to-brand-highlight transition-all duration-300 transform hover:scale-105 shadow-xl font-poppins"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Try Demo</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center space-x-2 px-8 py-4 text-lg border-2 border-brand-primary dark:border-brand-dark-primary text-brand-primary dark:text-brand-dark-primary hover:bg-brand-primary hover:text-white dark:hover:bg-brand-dark-primary dark:hover:text-white transition-all duration-300 rounded-xl font-poppins font-semibold"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Get Started</span>
                </button>
              </div>

              {/* Enhanced Hero Illustration with Housing Theme - More Space */}
              <div className="flex justify-center mb-16 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="relative">
                  {/* Main community illustration */}
                  <div className="relative">
                    <CommunityIllustration className="scale-150" />
                    
                    {/* Floating connection indicators */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-highlight/20 rounded-full flex items-center justify-center animate-pulse">
                      <UserCheck className="w-4 h-4 text-brand-highlight" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                      <Bot className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '2s' }}>
                      <Heart className="w-4 h-4 text-brand-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div id="features" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-heading dark:text-brand-dark-heading text-center mb-3 font-poppins animate-slide-up">
                What's Coming
              </h2>
              <p className="text-brand-body dark:text-brand-dark-body text-center mb-12 max-w-2xl mx-auto text-sm font-open-sans animate-slide-up" style={{ animationDelay: '200ms' }}>
                Experience the future of accommodation discovery with these powerful features
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <FeatureCard
                  icon={Building}
                  title="PG & Flat Listings"
                  description="Verified accommodations in your city with detailed photos, amenities, and transparent pricing. Browse through hundreds of options with virtual tours and instant booking."
                  delay={400}
                  illustration="bg-gradient-to-br from-blue-500 to-blue-600"
                />
                <FeatureCard
                  icon={Brain}
                  title="AI Matchmaking"
                  description="Personalized roommate matching using advanced AI algorithms to find compatible living partners based on lifestyle, preferences, and personality traits."
                  delay={600}
                  illustration="bg-gradient-to-br from-purple-500 to-purple-600"
                />
                <FeatureCard
                  icon={Lock}
                  title="Secure Connect"
                  description="Chat safely with verified users before finalizing your stay. Our secure platform ensures your privacy while you find your perfect living arrangement."
                  delay={800}
                  illustration="bg-gradient-to-br from-green-500 to-green-600"
                />
              </div>
            </div>

            {/* How It Works Section with Mockups */}
            <div id="how-it-works" className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-heading dark:text-brand-dark-heading mb-4 font-poppins animate-slide-up">
                  How It Works
                </h2>
                <p className="text-brand-body dark:text-brand-dark-body max-w-2xl mx-auto font-open-sans animate-slide-up" style={{ animationDelay: '200ms' }}>
                  Find your perfect living space in just a few simple steps
                </p>
              </div>

              <div className="space-y-16 lg:space-y-24">
                <HowItWorksStep
                  step={1}
                  title="Create Your Profile"
                  description="Set up your preferences and requirements for the perfect living space. Tell us about your lifestyle, budget, and what you're looking for in roommates."
                  icon={User}
                  mockupType="phone"
                  delay={400}
                />

                <HowItWorksStep
                  step={2}
                  title="AI Finds Your Matches"
                  description="Our advanced AI system analyzes your preferences and finds compatible roommates and PGs based on your lifestyle, personality, and requirements."
                  icon={Bot}
                  mockupType="desktop"
                  delay={600}
                />

                <HowItWorksStep
                  step={3}
                  title="Connect & Chat Safely"
                  description="Connect with verified users through our secure chat platform. Schedule visits and get to know your potential roommates before making a decision."
                  icon={MessageCircle}
                  mockupType="phone"
                  delay={800}
                />

                <HowItWorksStep
                  step={4}
                  title="Move Into Your New Home"
                  description="Complete the booking process and move into your new home with confidence. Our platform ensures a smooth transition to your perfect living space."
                  icon={Home}
                  mockupType="desktop"
                  delay={1000}
                  isLast={true}
                />
              </div>
            </div>

            {/* Why Choose ApanaGhr Section */}
            <div id="about" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-heading dark:text-brand-dark-heading text-center mb-3 font-poppins animate-slide-up">
                Why Choose ApanaGhr?
              </h2>
              <p className="text-brand-body dark:text-brand-dark-body text-center mb-12 max-w-3xl mx-auto font-open-sans animate-slide-up" style={{ animationDelay: '200ms' }}>
                We make finding your perfect accommodation simple and secure
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <WhyChooseCard
                  icon={CheckCircle}
                  title="Verified Properties"
                  description="All properties are thoroughly verified for your safety and comfort"
                  color="blue"
                  delay={400}
                />
                <WhyChooseCard
                  icon={Search}
                  title="Smart Location"
                  description="Find accommodations near your workplace or institution"
                  color="green"
                  delay={600}
                />
                <WhyChooseCard
                  icon={Handshake}
                  title="Trusted Partners"
                  description="Work with verified property owners and reliable partners"
                  color="purple"
                  delay={800}
                />
                <WhyChooseCard
                  icon={Timer}
                  title="Quick Process"
                  description="Streamlined booking process to save your valuable time"
                  color="orange"
                  delay={1000}
                />
              </div>
            </div>

            {/* Countdown Timer Section */}
            <div className="mb-16">
              <CountdownTimer />
            </div>

            {/* Contact/Email Form Section */}
            <div id="contact" className="mb-12">
              <div className="max-w-md mx-auto animate-slide-up" style={{ animationDelay: '1200ms' }}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-heading dark:text-brand-dark-heading mb-2 font-poppins">
                    Get Early Access
                  </h3>
                  <p className="text-brand-body dark:text-brand-dark-body font-open-sans">
                    Be the first to know when we launch
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative group">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-accent transition-colors duration-300" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-3 py-3 text-sm rounded-xl bg-brand-input dark:bg-brand-dark-card backdrop-blur-sm border border-brand-border dark:border-brand-dark-border text-brand-heading dark:text-brand-dark-heading placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300 font-open-sans"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-3 text-sm bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-xl hover:from-brand-accent hover:to-brand-highlight transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed font-poppins shadow-lg"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Notify Me</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="p-6 rounded-xl bg-brand-highlight/10 dark:bg-brand-dark-primary/20 border border-brand-highlight/20 dark:border-brand-dark-primary/30 flex items-center justify-center space-x-3 animate-scale-in shadow-lg">
                    <Check className="w-6 h-6 text-brand-highlight dark:text-brand-dark-primary" />
                    <span className="text-brand-primary dark:text-brand-dark-primary font-semibold font-poppins">
                      Thanks! We'll keep you updated.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '1400ms' }}>
              <div className="inline-flex items-center space-x-2 text-brand-body dark:text-brand-dark-body">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="font-open-sans text-sm">Join thousands waiting for the future of housing</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;