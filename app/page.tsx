import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header / Navbar */}
      <nav className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">TIRE<span className="text-orange-500">EXPERT</span></h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-orange-400 transition">Ελαστικά</a>
            <a href="#" className="hover:text-orange-400 transition">Συνεργεία Αττικής</a>
            <a href="#" className="hover:text-orange-400 transition">Επικοινωνία</a>
          </div>
        </div>
      </nav>

      {/* Hero Section & Search Filter */}
      <section className="bg-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Βρείτε τα ιδανικά ελαστικά για το όχημά σας
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            Αποστολή στο χώρο σας ή τοποθέτηση σε επιλεγμένα συνεργεία στην Αττική.
          </p>

          {/* Search Box */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col text-left">
              <label className="text-sm font-bold text-gray-700 mb-2 uppercase">Πλάτος</label>
              <select className="border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 outline-none transition">
                <option>195</option>
                <option>205</option>
                <option>225</option>
              </select>
            </div>
            <div className="flex flex-col text-left">
              <label className="text-sm font-bold text-gray-700 mb-2 uppercase">Προφίλ</label>
              <select className="border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 outline-none transition">
                <option>45</option>
                <option>55</option>
                <option>65</option>
              </select>
            </div>
            <div className="flex flex-col text-left">
              <label className="text-sm font-bold text-gray-700 mb-2 uppercase">Διάμετρος</label>
              <select className="border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 outline-none transition">
                <option>R15</option>
                <option>R16</option>
                <option>R17</option>
                <option>R18</option>
              </select>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
              ΑΝΑΖΗΤΗΣΗ
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-bold mb-2">Γρήγορη Αποστολή</h3>
          <p className="text-gray-600">Παράδοση σε πρακτορεία ή στην πόρτα σας σε όλη την Ελλάδα.</p>
        </div>
        <div className="p-6 border-x border-gray-200">
          <div className="text-4xl mb-4">🔧</div>
          <h3 className="text-xl font-bold mb-2">Δίκτυο Αττικής</h3>
          <p className="text-gray-600">Επιλέξτε συνεργείο τοποθέτησης κοντά σας κατά το checkout.</p>
        </div>
        <div className="p-6">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2">Εγγύηση Ποιότητας</h3>
          <p className="text-gray-600">Μόνο επώνυμα ελαστικά με πρόσφατο DOT.</p>
        </div>
      </section>
    </main>
  );
}