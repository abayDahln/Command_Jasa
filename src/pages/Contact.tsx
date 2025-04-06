import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import colors from '../styles';


function Contact() {
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12" style={{ paddingTop: 150 }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text mb-4 s-shadow" style={{ color: colors.textPrimary }}>Contact Us</h1>
          <p className="max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Contact Our Team. We Are Ready to Help You With Any Issues You May Have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#1a1f3d] rounded-lg p-6 s-card">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.textPrimary }}>Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6" style={{ color: colors.optionally }} />
                  <div>
                    <h3 className="text font-medium" style={{ color: colors.textPrimary }}>Email</h3>
                    <p className="text" style={{ color: colors.textSecondary }}>commands@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 " style={{ color: colors.optionally }} />
                  <div>
                    <h3 className="text font-medium" style={{ color: colors.textPrimary }}>Phone</h3>
                    <p className="text" style={{ color: colors.textSecondary }}>+62 888-0890-8463</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6" style={{ color: colors.optionally }} />
                  <div>
                    <h3 className="text font-medium" style={{ color: colors.textPrimary }}>Address</h3>
                    <p className="text" style={{ color: colors.textSecondary }}>
                      Cawang<br/>
                      East Jakarta
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f3d] rounded-lg p-6 s-card">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.textPrimary }}>Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text" style={{ color: colors.textSecondary }}>Monday - Friday:</span>
                  <span className="text" style={{ color: colors.textPrimary }}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text" style={{ color: colors.textSecondary }}>Saturday:</span>
                  <span className="text" style={{ color: colors.textPrimary }}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text" style={{ color: colors.textSecondary }}>Sunday:</span>
                  <span className="text" style={{ color: colors.textPrimary }}>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1f3d] rounded-lg p-6 hover:transform service-card hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#020817] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#efb4ff] input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#020817] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#efb4ff] input"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#020817] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#efb4ff] input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#020817] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#efb4ff] input"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full"
                onClick={() => setShowDialog(true)}
                style={{ color: colors.textPrimary, background: colors.optionally }}
                onMouseEnter={(e) => (e.currentTarget.style.background = colors.secondary)}
                onMouseLeave={(e) => (e.currentTarget.style.background = colors.optionally)}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>


        </div>

        {showDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#1a1f3d] rounded-lg p-6 max-w-md w-full relative">

              <h3 className="text-2xl font-bold text-center text-white mb-4">Comming Soon</h3>
              <p className="text-gray-400 text-center mb-6">
                Not Available at This Time
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => setShowDialog(false)}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg"

                  style={{ background: colors.primary, color: colors.textPrimary }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = colors.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = colors.primary)}
                >
                  <span>Close</span>
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;