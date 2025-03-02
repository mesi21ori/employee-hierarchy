"use client"
import "@/styles/globals.css";
import OrganizationChartDemo from "../components/organization-chart"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-[#f5f1eb]">
      <div className="w-full max-w-6xl  top-2">
        <OrganizationChartDemo />
      </div>
    </main>
  )
}

