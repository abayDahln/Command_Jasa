import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Check, ArrowRight, X, Mail, MessageSquare, Instagram } from 'lucide-react';
import { serv } from './Services';
import colors from "../styles";

function ServiceDetail() {
  const { id } = useParams();
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [contactMethod, setContactMethod] = useState<'email' | 'whatsapp' | 'instagram'>('email');

  if (!id) {
    return;
  }
  
  const serviceId = parseInt(id); 
  const servicess = serv.find(x => x.id === serviceId);

  if (!servicess) {
    return <h1>Service Not Found</h1>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const handleContactClick = (method: 'email' | 'whatsapp' | 'instagram') => {
    contactMethod;
    setContactMethod(method);
    if (method === 'email') {
      const email = "abby11dahlan@gmail.com";
      const subject = `Inquiry about ${encodeURIComponent(servicess.title)}`;
      const body = `Halo! \n\nSaya tertarik dengan layanan ${servicess.title} yang Anda tawarkan. Bisa kasih tahu saya lebih banyak tentangnya?  \n\nTerima kasih! Salam`;

    
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailURL, '_blank');
    } else if (method === 'instagram') {
      window.open('https://www.instagram.com/abby_dahln/', '_blank');
    } else {
      window.open('https://wa.me/6288808908463?text=I\'m interested in ' + servicess.title, '_blank');
    }
      
  };

  return (
    <div className="container mx-auto px-4 py-12" style={{paddingTop: 150}}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4" style={{color: colors.optionally}}>{servicess.icon}</div>
          <h1 className="text-4xl font-bold mb-4" style={{color: colors.textPrimary}}>{servicess.title}</h1>
          <p className="text" style={{color: colors.textPrimary}}>{servicess.description}</p>
        </div>

        {/* Features */}
        <div className="bg-[#1a1f3d] rounded-lg p-8 mb-8 s-card ">
          <h2 className="text-2xl font-bold mb-6 th2" style={{color: colors.textPrimary}}>Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {servicess.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 s-card">
                <Check className="w-5 h-5" style={{color: colors.accent}} />
                <span className="text" style={{color: colors.textSecondary}}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#1a1f3d] rounded-lg p-8 mb-8 s-card">
          <h2 className="text-2xl font-bold mb-6 th2" style={{color: colors.textPrimary}}>Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {servicess.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 s-card">
                <ArrowRight className="w-5 h-5" style={{color: colors.primary}} />
                <span className="text" style={{color: colors.textSecondary}}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicess.pricing.map((plan, index) => (
            <div key={index} className="bg-[#1a1f3d] rounded-lg p-6 text-center service-card cont">
              <h3 className="text-xl font-bold mb-2 th3" style={{color: colors.textPrimary}}>{plan.name}</h3>
              <div className="text-3xl font-bold mb-4" style={{color: colors.optionally}}>{plan.price}</div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text" style={{color: colors.textSecondary}}>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowContactDialog(true)}
                className="w-full px-6 py-2 rounded-full hover:bg-red-600"
                style={{color: colors.textPrimary, background: colors.optionally}}
                onMouseEnter={(e) => (e.currentTarget.style.background = colors.secondary)} 
                onMouseLeave={(e) => (e.currentTarget.style.background = colors.optionally)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Contact Dialog */}
        {showContactDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#1a1f3d] rounded-lg p-6 max-w-md w-full relative">
              <button
                onClick={() => setShowContactDialog(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Admin</h3>
              <p className="text-gray-400 mb-6">
                Choose how you'd like to get in touch with us about {servicess.title}
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => handleContactClick('email')}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact via Email</span>
                </button>
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Contact via WhatsApp</span>
                </button>
                <button
                  onClick={() => handleContactClick('instagram')}
                  className="w-full flex items-center justify-center space-x-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Contact via Instagram</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceDetail;


