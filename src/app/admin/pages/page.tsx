import prisma from "@/lib/prisma";
import Link from "next/link";
import { Plus, Search, MoreVertical, ExternalLink } from "lucide-react";
import DeletePageButton from "@/components/DeletePageButton";

export const dynamic = 'force-dynamic';

export default async function PagesList({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q || "";

  const pages = await prisma.authenticationPage.findMany({
    where: {
      OR: [
        { productName: { contains: query, mode: "insensitive" } },
        { companyName: { contains: query, mode: "insensitive" } },
        { productId: { contains: query, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      uuid: true,
      companyName: true,
      brandName: true,
      productName: true,
      productId: true,
      verificationStatus: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Authentication Pages</h1>
          <p className="text-slate-500 mt-1">Manage all your product verification pages</p>
        </div>
        <Link
          href="/admin/pages/create"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl shadow-sm transition-colors"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Page
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <form>
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search by product, company, or ID..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
            />
          </form>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Product Info</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Company / Brand</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Created</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                        {page.productName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-900">{page.productName}</div>
                        <div className="text-xs text-slate-500 mt-0.5">ID: {page.productId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">{page.companyName}</div>
                    <div className="text-xs text-slate-500">{page.brandName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      page.verificationStatus === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {page.verificationStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {new Date(page.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-3">
                      <Link href={`/verify/${page.uuid}`} target="_blank" className="text-slate-400 hover:text-indigo-600 transition-colors" title="View Public Page">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <Link href={`/admin/pages/${page.id}/edit`} className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors">
                        Edit
                      </Link>
                      <DeletePageButton id={page.id} />
                    </div>
                  </td>
                </tr>
              ))}
              
              {pages.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-slate-500">
                    No authentication pages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
