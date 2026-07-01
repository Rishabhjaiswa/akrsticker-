import Link from "next/link";
import { ShieldCheck, QrCode, Zap } from "lucide-react";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] font-sans selection:bg-indigo-500/30 selection:text-indigo-200 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center group cursor-pointer hover:opacity-80 transition-opacity">
          <Logo className="w-16 h-16 drop-shadow-[0_0_15px_rgba(192,132,252,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(192,132,252,0.6)]" />
        </div>
        <div className="flex items-center space-x-3 md:space-x-6">
          <Link href="/contact" className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Contact Us
          </Link>
          <Link href="/login" className="text-xs md:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-2.5 rounded-xl border border-white/10 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Admin Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Emergent Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 text-indigo-300 px-5 py-2 rounded-full mb-10 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">Authentication Only</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            Protect your brand with <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              unforgeable identities
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-neutral-400 mb-12 leading-relaxed font-light">
            Generate dynamic verification pages linked to unique QR codes. Allow your customers to instantly verify product authenticity with a simple scan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
            <Link href="/login" className="w-full sm:w-auto flex justify-center items-center px-10 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all hover:-translate-y-1">
              Get Started Now
            </Link>
            <Link href="#features" className="w-full sm:w-auto flex justify-center items-center px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-2xl font-bold text-lg transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why choose aakr?</h2>
            <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">Everything you need to secure your physical products digitally.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
                <QrCode className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Dynamic QR Codes</h3>
              <p className="text-neutral-400 leading-relaxed font-light">Each product gets a unique URL that cannot be guessed or brute-forced. Update the verification status anytime.</p>
            </div>
            
            <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                <ShieldCheck className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Instant Verification</h3>
              <p className="text-neutral-400 leading-relaxed font-light">Customers simply scan the code using Google Lens or iOS Camera to view a beautiful, mobile-optimized authenticity badge.</p>
            </div>
            
            <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Real-time Updates</h3>
              <p className="text-neutral-400 leading-relaxed font-light">Report a product as stolen or counterfeit from the admin dashboard, and the public verification page updates instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-indigo-600/10 filter blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to secure your products?</h2>
          <p className="text-xl text-neutral-400 mb-10 font-light">Join thousands of brands that trust aakr to protect their intellectual property and guarantee customer satisfaction.</p>
          <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-white text-black hover:bg-neutral-200 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <Logo className="w-12 h-12 mb-4" />
          <p className="text-neutral-500 font-light text-sm">© {new Date().getFullYear()} aakr Authentication. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
