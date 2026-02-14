import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">My Project</h1>
        <div className="space-x-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Modern Web Experience</h2>
        <p className="mb-6">Built with React & Tailwind CSS</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Fast</h3>
          <p>Optimized and lightning fast performance.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Responsive</h3>
          <p>Works perfectly on all devices.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Modern</h3>
          <p>Clean and professional UI design.</p>
        </div>
      </section>

    </div>
  );
}

export default App;
