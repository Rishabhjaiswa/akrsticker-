import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { CheckCircle, AlertTriangle, ShieldCheck, Info } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function VerifyPage({ params }: { params: Promise<{ uuid: string }> }) {
  const resolvedParams = await params;
  const page = await prisma.authenticationPage.findUnique({
    where: { uuid: resolvedParams.uuid },
  });

  if (!page) {
    notFound();
  }

  const isVerified = page.verificationStatus === "Verified";
  const isPending = page.verificationStatus === "Pending";

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      {/* Decorative animated background */}
      <div className={`absolute top-0 left-0 w-full h-[40vh] transform -skew-y-6 origin-top-left -z-10 ${
        isVerified ? "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-400" :
        isPending ? "bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400" :
        "bg-gradient-to-br from-red-500 via-rose-500 to-pink-500"
      }`} />
      
      <div className="max-w-md w-full bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/50 relative z-10">
        <div className="p-8 flex flex-col items-center text-center">
          
          {/* Logo element */}
          {page.logo ? (
            <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img src={page.logo} alt={page.companyName} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-24 h-24 mb-6 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center shadow-lg border-4 border-white text-3xl font-black text-slate-400">
              {page.companyName.charAt(0)}
            </div>
          )}

          {/* Verification Status Badge */}
          <div className="mb-8">
            {isVerified ? (
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-sm tracking-wide">VERIFIED AUTHENTIC</span>
              </div>
            ) : isPending ? (
              <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full border border-amber-100 shadow-sm">
                <Info className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-sm tracking-wide">PENDING VERIFICATION</span>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-100 shadow-sm">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="font-bold text-sm tracking-wide">WARNING: UNVERIFIED</span>
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <h1 className="text-2xl font-extrabold text-slate-900 mb-1">{page.productName}</h1>
          <p className="text-sm font-semibold text-indigo-600 mb-6 uppercase tracking-wider">{page.brandName}</p>

          <div className="w-full bg-slate-50 rounded-2xl p-5 mb-6 text-left border border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-slate-500 uppercase">Product ID</span>
              <span className="text-sm font-bold text-slate-800 font-mono">{page.productId}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-slate-500 uppercase">Manufacturer</span>
              <span className="text-sm font-bold text-slate-800">{page.companyName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-500 uppercase">Date Checked</span>
              <span className="text-sm font-bold text-slate-800">{new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {page.description && (
            <div className="w-full text-left bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <h3 className="text-xs font-semibold text-slate-500 uppercase mb-2">Additional Information</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {page.description}
              </p>
            </div>
          )}
          
        </div>
        
        {/* Footer */}
        <div className="bg-slate-100/50 p-4 text-center border-t border-slate-200">
          <p className="text-[10px] text-slate-400 font-semibold tracking-wider flex items-center justify-center uppercase">
            <ShieldCheck className="w-3 h-3 mr-1" /> Authenticated via aakr
          </p>
        </div>
      </div>
    </div>
  );
}
