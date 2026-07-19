import prisma from "@/lib/prisma";
import Link from "next/link";
import { FileText, Plus, CheckCircle, Clock } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const totalPages = await prisma.authenticationPage.count();
  const recentPages = await prisma.authenticationPage.findMany({
    take: 5,
    select: {
      id: true,
      uuid: true,
      companyName: true,
      productName: true,
      productId: true,
      verificationStatus: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 mt-1">Overview of your authentication pages</p>
        </div>
        <Link
          href="/admin/pages/create"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl shadow-sm transition-colors"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Page
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center">
          <div className="p-4 bg-indigo-50 rounded-xl">
            <FileText className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="ml-5">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Pages</p>
            <p className="text-3xl font-bold text-slate-900">{totalPages}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center">
          <div className="p-4 bg-emerald-50 rounded-xl">
            <CheckCircle className="h-8 w-8 text-emerald-600" />
          </div>
          <div className="ml-5">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Verified Brands</p>
            <p className="text-3xl font-bold text-slate-900">
              {recentPages.filter(p => p.verificationStatus === 'Verified').length}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center">
          <div className="p-4 bg-amber-50 rounded-xl">
            <Clock className="h-8 w-8 text-amber-600" />
          </div>
          <div className="ml-5">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Recent Updates</p>
            <p className="text-3xl font-bold text-slate-900">{recentPages.length}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Recently Created Pages</h3>
        </div>
        
        {recentPages.length === 0 ? (
          <div className="p-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
              <FileText className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-base font-medium text-slate-900 mb-1">No pages yet</h3>
            <p className="text-sm text-slate-500 mb-4">Get started by creating your first authentication page.</p>
            <Link
              href="/admin/pages/create"
              className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-medium rounded-lg transition-colors"
            >
              Create Page
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Company</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Created</th>
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">View</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {recentPages.map((page) => (
                  <tr key={page.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900">{page.productName}</span>
                        <span className="text-xs text-slate-500">ID: {page.productId}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {page.companyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        page.verificationStatus === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {page.verificationStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {new Date(page.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/pages/${page.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                        Edit
                      </Link>
                      <Link href={`/verify/${page.uuid}`} target="_blank" className="text-slate-500 hover:text-slate-700">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
