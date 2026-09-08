import React, { useState } from 'react';
import { Activity, Search, CheckCircle2, XCircle, CreditCard, ShieldCheck } from 'lucide-react';

const initialMembers = [
  { id: "MEM-101", name: "Amina Bello", plan: "VIP All-Access", status: "Active", expiry: "2026-11-15", checkIns: 18, avatar: "AB" },
  { id: "MEM-102", name: "Tunde Bakare", plan: "Standard Gym", status: "Active", expiry: "2026-09-30", checkIns: 12, avatar: "TB" },
  { id: "MEM-103", name: "Chidi Okonkwo", plan: "Weekend Pass", status: "Expired", expiry: "2026-08-28", checkIns: 4, avatar: "CO" },
  { id: "MEM-104", name: "Grace Nwosu", plan: "VIP All-Access", status: "Active", expiry: "2026-12-01", checkIns: 24, avatar: "GN" }
];

export default function GymDemo() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("All");
  const [logMessage, setLogMessage] = useState(null);

  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = selectedPlan === "All" || m.plan === selectedPlan;
    return matchesSearch && matchesPlan;
  });

  const handleCheckIn = (member) => {
    if (member.status === "Expired") {
      setLogMessage({ type: "error", text: `Access Denied for ${member.name}: Membership Expired!` });
      return;
    }

    setMembers(prev => prev.map(m => m.id === member.id ? { ...m, checkIns: m.checkIns + 1 } : m));
    setLogMessage({ type: "success", text: `Turnstile Unlocked! Welcome back, ${member.name}.` });

    setTimeout(() => setLogMessage(null), 3500);
  };

  const handleRenew = (memberId) => {
    setMembers(prev => prev.map(m => m.id === memberId ? { ...m, status: "Active", expiry: "2026-12-31" } : m));
    setLogMessage({ type: "success", text: `Membership renewed successfully for ${memberId}!` });

    setTimeout(() => setLogMessage(null), 3500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 max-w-5xl mx-auto my-2 text-white shadow-2xl font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" /> FitPulse Gym Operations & Gate Pass
          </h3>
          <p className="text-xs text-slate-400 mt-1">Live PoC Demo — Access control logs, turnstile check-ins, and membership renewals</p>
        </div>

        <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400">Active Passes:</span>
          <span className="text-sm font-bold font-mono text-emerald-400">
            {members.filter(m => m.status === "Active").length} / {members.length}
          </span>
        </div>
      </div>

      {/* Alert Notification */}
      {logMessage && (
        <div className={
          logMessage.type === "success" 
            ? "mb-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
            : "mb-6 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2"
        }>
          {logMessage.type === "success" ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0" />}
          {logMessage.text}
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6"><div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Member or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {["All", "VIP All-Access", "Standard Gym", "Weekend Pass"].map(plan => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={
                selectedPlan === plan
                  ? "px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-500 text-slate-950 font-bold whitespace-nowrap"
                  : "px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800 hover:text-white whitespace-nowrap"
              }
            >
              {plan}
            </button>
          ))}
        </div>
      </div>

      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMembers.map(member => (
          <div 
            key={member.id}
            className="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 sm:p-5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold font-mono flex items-center justify-center text-sm">
                    {member.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{member.name}</h4>
                    <p className="text-[10px] font-mono text-slate-500">{member.id}</p>
                  </div>
                </div>

                <span className={
                  member.status === "Active"
                    ? "text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1"
                    : "text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 flex items-center gap-1"
                }>
                  <ShieldCheck className="w-3 h-3" /> {member.status}
                </span>
              </div>

              <div className="bg-slate-900/60 rounded-lg p-3 my-3 text-xs font-mono space-y-1.5 border border-slate-800/80">
                <div className="flex justify-between text-slate-400">
                  <span>Plan Type:</span>
                  <span className="text-white font-semibold">{member.plan}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Valid Until:</span>
                  <span className={member.status === "Expired" ? "text-rose-400 font-semibold" : "text-slate-300"}>{member.expiry}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Check-ins:</span>
                  <span className="text-emerald-400 font-bold">{member.checkIns} Visits</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => handleCheckIn(member)}className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold py-2 px-3 rounded-lg transition-all text-center flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" /> Turnstile Pass
              </button>

              {member.status === "Expired" && (
                <button
                  onClick={() => handleRenew(member.id)}
                  className="bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 font-mono text-xs py-2 px-3 rounded-lg transition-all flex items-center gap-1"
                >
                  <CreditCard className="w-3.5 h-3.5" /> Renew
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}