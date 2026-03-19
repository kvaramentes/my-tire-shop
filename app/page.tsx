"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Σύνδεση με το Supabase χρησιμοποιώντας τα κλειδιά από το .env.local
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Results() {
  const [tires, setTires] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTires() {
      const { data, error } = await supabase
        .from('tires')
        .select('*');
      
      if (error) {
        console.error('Σφάλμα:', error);
      } else {
        setTires(data || []);
      }
      setLoading(false);
    }

    fetchTires();
  }, []);

  if (loading) return <div className="p-10 text-center font-bold">Φόρτωση ελαστικών...</div>;

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">
          Διαθέσιμα <span className="text-orange-500">Ελαστικά</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tires.map((tire) => (
            <div key={tire.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-black text-orange-500 uppercase tracking-widest">{tire.brand}</span>
                    <h3 className="text-xl font-bold text-slate-800">{tire.model}</h3>
                  </div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-sm font-bold text-slate-600">
                    {tire.size_text}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <span>⛽ Καύσιμο: <span className="font-bold text-slate-900">{tire.fuel_efficiency}</span></span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <span>🌧️ Βρεγμένο: <span className="font-bold text-slate-900">{tire.wet_grip}</span></span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <span>☀️ {tire.season}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <span>🚗 {tire.vehicle_type}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-2xl font-black text-slate-900">{tire.price}€</span>
                  <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-orange-500 transition">
                    ΕΠΙΛΟΓΗ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {tires.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-inner">
            <p className="text-slate-400 font-medium">Δεν βρέθηκαν ελαστικά στη βάση δεδομένων.</p>
          </div>
        )}
      </div>
    </main>
  );
}