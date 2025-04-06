//import React from 'react';
import colors from '../styles';
import { Link } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/3DViewer";
import { useEffect, useState } from 'react';
import {services, team, features} from '../DataSource';








function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const threshold = window.screen.width * 0.8;
      setIsVisible(screenWidth >= threshold);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ paddingTop: 150 }}>
      {/* Hero Section */}
      <div className="relative">
        <div className="canvas-container">
          {isVisible && (
            <Canvas camera={{ position: [5, 5, 18] }} gl={{ alpha: true }} style={{ translate: 400 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[5, 10, 5]} intensity={0.2} />
              <Model />
              <OrbitControls />
            </Canvas>
          )}
        </div>
        <section className="container mx-auto px-4 py-20 content">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className=''>
              <h1 className="text-4xl md:text-6xl font-bold mb-2 py-16" style={{ color: colors.textPrimary }}>
                Our Services: Transforming Ideas into Digital Excellence
              </h1>
              <p className="mb-8" style={{ color: colors.textSecondary }}>
                We specialize in delivering high-quality digital solutions, from creative UI/UX designs to powerful backend systems and immersive game development. Whether you need a modern website, a mobile app, or a full-stack software solution, we bring expertise and innovation to every project.
              </p>
              <div className="flex space-x-4">
                

                <Link
                  to='/Services'
                  className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black"
                  
                >
                  Get Started Now
                </Link>

                <button className="">
                  Learn More
                </button>
              </div>
            </div>



          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center hover:transform hover:-translate-y-2 transition-all duration-300 s-shadow">
              <h3 className="text-4xl font-bold " style={{ color: colors.primary }}>50+</h3>
              <p className="text" style={{ color: colors.textPrimary }}>Subscriber</p>
            </div>
            <div className="text-center hover:transform hover:-translate-y-2 transition-all duration-300 s-shadow">
              <h3 className="text-4xl font-bold" style={{ color: colors.primary }}>100+</h3>
              <p className="text" style={{ color: colors.textPrimary }}>Client</p>
            </div>
            <div className="text-center hover:transform hover:-translate-y-2 transition-all duration-300 s-shadow">
              <h3 className="text-4xl font-bold" style={{ color: colors.primary }}>98%</h3>
              <p className="text" style={{ color: colors.textPrimary }}>Success</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 py-10 text-center">
            <span className="h-hover" style={{ color: colors.textPrimary }}>
              Services
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (

              <div key={service.id} className="service-card bg-[#1a1f3d] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                <div>
                  <div className="mb-4" style={{ color: colors.optionally }}>{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>{service.title}</h3>
                  <p className="text" style={{ color: colors.textSecondary }}>{service.description}</p>
                  <Link to={`/services/${service.id}`} className=" mt-4 inline-block" style={{ color: colors.primary }}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-20">

          <h2 className="text-3xl font-bold mb-12 py-10 text-center">
            <span className="h-hover" style={{ color: colors.textPrimary }}>
              The Team
            </span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="service-card bg-[#1a1f3d] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>{member.name}</h3>
                <p className="text" style={{ color: colors.textSecondary }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">

          <h2 className="text-3xl font-bold mb-12 py-10 text-center">
            <span className="h-hover" style={{ color: colors.textPrimary }}>
              Essential Features for Every Digital Solution
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <div key={index} className="service-card bg-[#1a1f3d] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="mb-4" style={{ color: colors.optionally }}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>{feature.title}</h3>
                <p className="text" style={{ color: colors.textSecondary }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
        <div className="bg-[#1a1f3d] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up for Newsletter</h2>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 p-3 rounded-l-lg bg-[#020817] text-white border-none focus:outline-none"
            />
            <button className="px-6 py-3 rounded-r-lg"
            style={{ background: colors.secondary, color: colors.textPrimary }} onMouseEnter={(e) => (e.currentTarget.style.background = colors.primary)} onMouseLeave={(e) => (e.currentTarget.style.background = colors.secondary)}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
        

      </div>

      
    </div>
  );
}

export default Home;