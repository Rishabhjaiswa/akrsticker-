"use client";

import { useState } from "react";
import { createAuthPage, updateAuthPage } from "@/app/actions/pages";
import { AuthenticationPage } from "@prisma/client";
import Link from "next/link";
import { Save, ArrowLeft, Image as ImageIcon } from "lucide-react";

export default function PageForm({ page }: { page?: AuthenticationPage }) {
  const [loading, setLoading] = useState(false);
  const [logoPreview, setLogoPreview] = useState(page?.logo || "");

  // Base64 converter for simple logo upload
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      action={async (formData) => {
        setLoading(true);
        if (logoPreview) formData.set("logo", logoPreview);
        
        try {
          if (page) {
            await updateAuthPage(page.id, formData);
          } else {
            await createAuthPage(formData);
          }
        } finally {
          setLoading(false);
        }
      }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link href="/admin/pages" className="p-2 bg-white rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
            <ArrowLeft className="h-5 w-5 text-slate-500" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              {page ? "Edit Authentication Page" : "Create Authentication Page"}
            </h1>
            <p className="text-slate-500 mt-1">Fill in the details for the verification page</p>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-sm transition-colors disabled:opacity-50"
        >
          <Save className="mr-2 h-4 w-4" />
          {loading ? "Saving..." : "Save Page"}
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-8">
        {/* Company & Brand Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-100 pb-3 mb-5">Company Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
              <input
                type="text"
                name="companyName"
                defaultValue={page?.companyName}
                required
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                placeholder="e.g. aakr Tech"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Brand Name</label>
              <input
                type="text"
                name="brandName"
                defaultValue={page?.brandName}
                required
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                placeholder="e.g. aakr Smart Devices"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Company Logo (Optional)</label>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  {logoPreview ? (
                    <img className="h-16 w-16 object-cover rounded-xl border border-slate-200" src={logoPreview} alt="Logo preview" />
                  ) : (
                    <div className="h-16 w-16 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50">
                      <ImageIcon className="h-6 w-6 text-slate-400" />
                    </div>
                  )}
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-colors cursor-pointer"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-100 pb-3 mb-5">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Product Name</label>
              <input
                type="text"
                name="productName"
                defaultValue={page?.productName}
                required
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                placeholder="e.g. Smart Watch Pro"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Product ID / Serial Number</label>
              <input
                type="text"
                name="productId"
                defaultValue={page?.productId}
                required
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                placeholder="e.g. SN-123456789"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
              <textarea
                name="description"
                defaultValue={page?.description || ""}
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                placeholder="Enter product description, warranty details, or authentication message..."
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Verification Status</label>
              <select
                name="verificationStatus"
                defaultValue={page?.verificationStatus || "Verified"}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
              >
                <option value="Verified">Verified Authentic</option>
                <option value="Pending">Pending Verification</option>
                <option value="Warning">Counterfeit Warning</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
