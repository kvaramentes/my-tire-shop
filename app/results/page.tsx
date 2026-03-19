"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ResultsPage() {
  const [tires, setTires] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTires() {
      try {
        const { data, error } = await supabase.from('tires').select('*');
        if (error) throw error;
        setTires(data || []);
      } catch (err: any) {
        console.error('Σφάλμα:', err);
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTires();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-xl font-bold text-slate-600 animate-pulse">Φόρτωση ελαστικών...</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            ΔΙΑΘΕΣΙΜΑ <span className="text-orange-500">ΕΛΑΣΤΙΚΑ</span>
          </h1>
          <a href="/" className="text-sm font-bold text-slate-500 hover:text-orange-600">← Πίσω</a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tires.map((tire) => (
            <div key={tire.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:scale-[1.02] transition-transform">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">{tire.brand}</span>
                    <h3 className="text-xl font-extrabold text-slate-800">{tire.model}</h3>
                  </div>
                  <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-xs font-black">
                    {tire.size_text}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50 my-4">
                  <div className="text-sm text-slate-600">⛽ Καύσιμο: <span className="font-bold">{tire.fuel_efficiency}</span></div>
                  <div className="text-sm text-slate-600">🌧️ Κράτημα: <span className="font-bold">{tire.wet_grip}</span></div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-3xl font-black text-slate-900">{tire.price}€</span>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase hover:bg-orange-600 transition-colors">
                    ΕΠΙΛΟΓΗ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}