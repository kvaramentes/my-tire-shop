"use client"; // Απαραίτητο για να δουλεύουν τα κουμπιά

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSearch = () => {
    // Στέλνουμε τον χρήστη στη σελίδα results
    router.push('/results');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">TIRE<span className="text-orange-500">EXPERT</span></h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-orange-400 transition text-sm font-bold uppercase">Ελαστικά</a>
            <a href="#" className="hover:text-orange-400 transition text-sm font-bold uppercase">Συνεργεία Αττικής</a>
            <a href="#" className="hover:text-orange-400 transition text-sm font-bold uppercase">Επικοινωνία</a>
          </div>
        </div>
      </nav>

      <section className="bg-slate-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Βρείτε τα ιδανικά ελαστικά <br/> για το όχημά σας
          </h2>
          <p className="text-slate-300 mb-10 text-xl font-light">
            Αποστολή σε όλη την Ελλάδα ή τοποθέτηση σε επιλεγμένα σημεία στην Αττική.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col text-left">
              <label className="text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Πλάτος</label>
              <select className="border-2 border-gray-100 p-3 rounded-xl focus:border-orange-500 outline-none cursor-pointer font-bold">
                <option>225</option>
                <option>205</option>
                <option>195</option>
              </select>
            </div>
            <div className="flex flex-col text-left">
              <label className="text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Προφίλ</label>
              <select className="border-2 border-gray-100 p-3 rounded-xl focus:border-orange-500 outline-none cursor-pointer font-bold">
                <option>45</option>
                <option>55</option>
                <option>65</option>
              </select>
            </div>
            <div className="flex flex-col text-left">
              <label className="text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Διάμετρος</label>
              <select className="border-2 border-gray-100 p-3 rounded-xl focus:border-orange-500 outline-none cursor-pointer font-bold">
                <option>R17</option>
                <option>R16</option>
                <option>R18</option>
              </select>
            </div>
            <button 
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-6 rounded-xl shadow-lg transform active:scale-95 transition-all text-sm uppercase tracking-wider"
            >
              ΑΝΑΖΗΤΗΣΗ
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}