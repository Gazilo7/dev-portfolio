import React, { useState } from 'react';
import { Wallet, ShieldCheck, ArrowRightLeft, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PiWeb3Demo() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [userAuth, setUserAuth] = useState(null);
  const [txAmount, setTxAmount] = useState('10.5');
  const [memo, setMemo] = useState('API License Subscription');
  const [txState, setTxState] = useState('idle'); // idle | signing | pending | success
  const [txHash, setTxHash] = useState(null);

  const handleAuthenticate = () => {
    setTxState('signing');
    setTimeout(() => {
      setUserAuth({
        username: 'Pioneer_Dev_99',
        uid: 'pi_usr_88a91bf23c4d'
      });
      setWalletConnected(true);
      setTxState('idle');
    }, 1200);
  };

  const handleExecutePayment = (e) => {
    e.preventDefault();
    if (!walletConnected) return;

    setTxState('pending');

    setTimeout(() => {
      const generatedHash = '0x' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setTxHash(generatedHash);
      setTxState('success');
    }, 2500);
  };

  const resetTransaction = () => {
    setTxState('idle');
    setTxHash(null);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 max-w-5xl mx-auto my-2 text-white shadow-2xl font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold font-mono text-amber-400 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-amber-400" /> Pi Network Web3 Gateway
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Live PoC Demo — Decoupled wallet authentication, Pi SDK transaction callbacks, and testnet verification
          </p>
        </div>

        <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-xs font-mono text-amber-400 font-semibold">Pi Testnet Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Wallet Session & Account Information */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                User Authentication & SDK
              </span>
              <span className={
                walletConnected
                  ? "text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1"
                  : "text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
              }>
                {walletConnected ? "Wallet Linked" : "Disconnected"}
              </span>
            </div>

            {!walletConnected ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Authorize Pi Sandbox Profile</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                    Simulate Pi SDK authentication token exchange (Pi.authenticate) to establish secure session scopes.</p>
                </div>
                <button
                  onClick={handleAuthenticate}
                  disabled={txState === 'signing'}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold py-2.5 px-5 rounded-lg transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  {txState === 'signing' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Verifying Access Token...
                    </>
                  ) : (
                    <>Connect Pi Wallet</>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 font-mono text-xs space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>Pioneer Account:</span>
                    <span className="text-amber-400 font-bold">{userAuth.username}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>User UID:</span>
                    <span className="text-slate-300">{userAuth.uid}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Network Node:</span>
                    <span className="text-emerald-400">Pi Sandbox Node-v2</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg text-xs font-mono text-amber-300/80 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                  <span>SDK session verified. Ready to sign and execute client-side crypto payments.</span>
                </div>
              </div>
            )}
          </div>

          {walletConnected && (
            <div className="pt-4 border-t border-slate-800/80 mt-4">
              <button
                onClick={() => { setWalletConnected(false); setUserAuth(null); resetTransaction(); }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs font-mono py-2 rounded-lg border border-slate-800 transition-all"
              >
                Disconnect Session
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Transaction Terminal */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider block mb-4">
              Payment Dispatch Terminal
            </span>

            {txState === 'success' ? (
              <div className="py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-sm font-bold text-white">Payment Confirmed</h4>
                  <p className="text-xs text-emerald-400 font-mono">Testnet Transfer Complete</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 font-mono text-[11px] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Amount Paid:</span>
                    <span className="text-amber-400 font-bold">{txAmount} π</span>
                  </div>
                  <div className="flex justify-between"><span className="text-slate-500">Transaction ID:</span>
                    <span className="text-slate-300 truncate max-w-[180px]">{txHash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-emerald-400 font-semibold">on_ready_for_server_completion</span>
                  </div>
                </div>

                <button
                  onClick={resetTransaction}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 text-xs font-mono py-2 rounded-lg transition-all"
                >
                  Process New Transaction
                </button>
              </div>
            ) : (
              <form onSubmit={handleExecutePayment} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">Payment Amount (π)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={txAmount}
                    onChange={(e) => setTxAmount(e.target.value)}
                    disabled={!walletConnected || txState === 'pending'}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-amber-400 focus:outline-none focus:border-amber-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">Payment Memo</label>
                  <input
                    type="text"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    disabled={!walletConnected || txState === 'pending'}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-amber-500 disabled:opacity-50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!walletConnected || txState === 'pending'}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
                  >
                    {txState === 'pending' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> Signing Transaction...
                      </>
                    ) : (
                      <>
                        <ArrowRightLeft className="w-4 h-4" /> Execute Pi SDK Payment
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {!walletConnected && (
            <p className="text-[11px] font-mono text-slate-500 text-center mt-4">
              Authenticate wallet on the left panel to unlock payment controls.
            </p>
          )}
        </div>

      </div>

    </div>
  );
}