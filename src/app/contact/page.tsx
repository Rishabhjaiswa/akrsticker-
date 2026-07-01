import Link from "next/link";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-indigo-600 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Get in touch</h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Have questions about our dynamic QR authentication system? Our team is ready to help you secure your products and protect your brand.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900">Email us</h3>
                  <p className="mt-1 text-slate-500">Our friendly team is here to help.</p>
                  <a href="mailto:hello@aakr.com" className="mt-2 inline-block font-medium text-indigo-600 hover:text-indigo-700">hello@aakr.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900">Visit us</h3>
                  <p className="mt-1 text-slate-500">Come say hello at our office HQ.</p>
                  <p className="mt-2 font-medium text-slate-800">100 Innovation Drive<br />Tech Park, CA 94043</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900">Call us</h3>
                  <p className="mt-1 text-slate-500">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+18001234567" className="mt-2 inline-block font-medium text-indigo-600 hover:text-indigo-700">+1 (800) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-2">First name</label>
                  <input type="text" id="first-name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-2">Last name</label>
                  <input type="text" id="last-name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors" placeholder="you@company.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
