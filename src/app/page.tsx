export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans">
      {/* Decorative animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 transform -skew-y-3 origin-top-left -z-10" />
      <div className="absolute top-10 right-0 lg:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute top-32 left-0 lg:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />

      {/* Main content card */}
      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/50 transform transition-all hover:scale-[1.02] duration-500 relative z-10">
        <div className="p-8 sm:p-10 flex flex-col items-center text-center">
          
          {/* Logo element */}
          <div className="relative w-28 h-28 mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-2xl blur opacity-50 group-hover:opacity-80 transition duration-500 scale-110"></div>
            <div className="relative w-full h-full bg-white rounded-2xl p-1 shadow-lg border border-gray-100 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-500">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">NX</span>
            </div>
          </div>
          
          {/* Company Name & Verification */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">NexGen Tech</h1>
            <span 
              className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full shadow-sm"
              title="Verified Company"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 mb-6 border border-emerald-100 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
            Verified Partner
          </span>
          
          {/* Short Description */}
          <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm sm:text-base px-2">
            Pioneering digital solutions for modern businesses. We craft premium software experiences that elevate your brand and drive results.
          </p>
          
          {/* Action Links */}
          <div className="w-full space-y-3">
            {/* Website Link */}
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-50/50 rounded-2xl hover:bg-indigo-50 border border-slate-100 hover:border-indigo-200 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4 text-left">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Visit Website</p>
                <p className="text-slate-900 font-semibold group-hover:text-indigo-700 transition-colors">nexgentech.com</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </a>

            {/* Email Link */}
            <a href="mailto:hello@nexgentech.com" className="flex items-center p-4 bg-slate-50/50 rounded-2xl hover:bg-cyan-50 border border-slate-100 hover:border-cyan-200 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="ml-4 text-left">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-slate-900 font-semibold group-hover:text-cyan-700 transition-colors">hello@nexgen.com</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
            
            {/* Phone Link */}
            <a href="tel:+1234567890" className="flex items-center p-4 bg-slate-50/50 rounded-2xl hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="ml-4 text-left">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Call Us</p>
                <p className="text-slate-900 font-semibold group-hover:text-blue-700 transition-colors">+1 (234) 567-890</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
          
        </div>
        
        {/* Footer */}
        <div className="bg-slate-50/80 backdrop-blur-md p-5 text-center border-t border-slate-200">
          <p className="text-xs text-slate-500 font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} NexGen Tech. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
