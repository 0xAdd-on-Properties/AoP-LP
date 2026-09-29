'use client';

import { useMemo, useState } from 'react';
import { Send, Calculator } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';
import Footer from '../components/Footer';

const LENDERS = [
  { name: 'SBI Home Loans', rate: '8.40%', maxTenure: '30 yrs' },
  { name: 'HDFC Bank', rate: '8.55%', maxTenure: '30 yrs' },
  { name: 'ICICI Bank', rate: '8.75%', maxTenure: '25 yrs' },
  { name: 'LIC Housing Finance', rate: '8.60%', maxTenure: '30 yrs' },
];

function emi(principal: number, annualRate: number, years: number) {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;
  if (!principal || !monthlyRate || !months) return 0;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export default function MortgageFinancing() {
  const [propertyValue, setPropertyValue] = useState('5000000');
  const [downPayment, setDownPayment] = useState('1000000');
  const [rate, setRate] = useState('8.5');
  const [years, setYears] = useState('20');

  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loanAmount = Math.max(0, Number(propertyValue || 0) - Number(downPayment || 0));
  const monthlyEmi = useMemo(
    () => emi(loanAmount, Number(rate || 0), Number(years || 0)),
    [loanAmount, rate, years]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_type: 'mortgage_inquiry',
          ...form,
          message: `Property value: ₹${propertyValue}, down payment: ₹${downPayment}, tenure: ${years}yrs, est. rate: ${rate}%`,
          metadata: { propertyValue, downPayment, rate, years, estimatedEmi: Math.round(monthlyEmi) },
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setDone(true);
    } catch {
      setError('Could not submit your request. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30';
  const labelClass = 'block text-sm font-medium text-[#1d1d1f] mb-1';

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-emerald-600 mb-3">Financing</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Mortgage &amp; Home Loan Financing</h1>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Compare indicative home loan rates and estimate your EMI, then get matched with a lender.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-black/5 p-6">
            <div className="flex items-center gap-2 mb-5">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <h2 className="font-semibold text-[#1d1d1f]">EMI Estimator</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Property value (₹)</label>
                <input type="number" value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Down payment (₹)</label>
                <input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Interest rate (%)</label>
                  <input type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Tenure (years)</label>
                  <input type="number" value={years} onChange={(e) => setYears(e.target.value)} className={inputClass} />
                </div>
              </div>
            </div>
            <div className="mt-6 bg-emerald-50 rounded-xl p-5 text-center">
              <p className="text-sm text-emerald-700 mb-1">Estimated monthly EMI</p>
              <p className="text-3xl font-bold text-emerald-700">
                ₹{monthlyEmi ? Math.round(monthlyEmi).toLocaleString('en-IN') : '0'}
              </p>
              <p className="text-xs text-emerald-700/70 mt-1">on a loan of ₹{loanAmount.toLocaleString('en-IN')}</p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-black/5 overflow-hidden">
            <div className="p-6 border-b border-black/5">
              <h2 className="font-semibold text-[#1d1d1f]">Indicative lender rates</h2>
              <p className="text-sm text-[#6e6e73]">Rates shown are illustrative starting rates; actuals depend on credit profile.</p>
            </div>
            <div className="divide-y divide-black/5">
              {LENDERS.map((l) => (
                <div key={l.name} className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="font-medium text-[#1d1d1f]">{l.name}</p>
                    <p className="text-sm text-[#6e6e73]">Up to {l.maxTenure} tenure</p>
                  </div>
                  <div className="text-lg font-bold text-[#1d1d1f]">{l.rate}<span className="text-sm font-normal text-[#6e6e73]"> p.a.</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-black/5 p-6 sm:p-10">
          {done ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Request received</h3>
              <p className="text-[#6e6e73]">A financing partner will reach out with a personalized quote.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-1">Get matched with a lender</h2>
              <p className="text-[#6e6e73] text-sm mb-6">We'll pass your EMI estimate along so the conversation starts warm.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>City</label>
                    <input value={form.city} onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))} className={inputClass} placeholder="Visakhapatnam" />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className={inputClass} />
                  </div>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Sending...' : 'Request a call back'}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
