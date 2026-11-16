export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-center text-blue-600">
        MyContractr
      </h1>
      <p className="text-xl text-slate-600 mb-10 text-center max-w-lg">
        Hire trusted contractors, fast. Post your project for free.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold">
          Post a Job
        </button>
        <button className="px-8 py-4 border-2 border-slate-300 rounded-lg font-semibold">
          Browse Jobs
        </button>
      </div>
    </main>
  )
}
