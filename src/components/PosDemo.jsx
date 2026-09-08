import React, { useState } from 'react';
import { ShoppingBag, CreditCard, Plus, Minus, Trash2, CheckCircle2, DollarSign } from 'lucide-react';

const catalogItems = [
  { id: 101, name: "Paracetamol Extra (500mg)", category: "Pharmacy", price: 1200 },
  { id: 102, name: "Amoxicillin Capsules (250mg)", category: "Pharmacy", price: 3500 },
  { id: 103, name: "Grilled Chicken Combo & Chips", category: "Restaurant", price: 8500 },
  { id: 104, name: "Cold Brew Iced Coffee (50cl)", category: "Restaurant", price: 2500 },
  { id: 105, name: "Vitamin C Effervescent (20s)", category: "Pharmacy", price: 2800 },
  { id: 106, name: "Club Sandwich & Side Salad", category: "Restaurant", price: 6000 },
];

export default function PosDemo() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Transfer");
  const [completedOrder, setCompletedOrder] = useState(null);
  const [dailySales, setDailySales] = useState(148500);

  // Cart Management Logic
  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.075; // 7.5% VAT
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const orderData = {
      orderId: "POS-" + Math.floor(100000 + Math.random() * 900000),
      items: [...cart],
      total,
      paymentMethod,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setCompletedOrder(orderData);
    setDailySales(prev => prev + total);
    setCart([]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-5xl mx-auto my-4 text-white shadow-2xl font-sans">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold font-mono text-emerald-400">POS Express Billing Terminal</h3>
          <p className="text-xs text-slate-400 mt-1">Live PoC Demo — Rapid checkout, VAT computation & digital sales logs</p>
        </div>
        <div className="bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/60 flex items-center gap-3">
          <DollarSign className="w-4 h-4 text-emerald-400" />
          <div>
            <p className="text-[10px] font-mono text-slate-400 uppercase">Register Sales Total</p>
            <p className="text-sm font-bold font-mono text-emerald-400">₦{dailySales.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Main POS Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Product Catalog Grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Product Catalog</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {catalogItems.map(item => (
              <button
                key={item.id}
                onClick={() => addToCart(item)}
                className="bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/40 p-3 rounded-lg text-left transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.category}
                  </span>
                  <p className="text-xs font-semibold text-white mt-2 group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </p>
                </div>
                <p className="text-sm font-mono font-bold text-slate-300 mt-3">
                  ₦{item.price.toLocaleString()}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Checkout Cart & Billing Panel (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-emerald-400" /> Active Order Cart
              </span>
              <span className="text-xs font-mono text-slate-400">{cart.length} items</span>
            </div>

            {/* Cart Items List */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs font-mono">
                  Cart is empty. Click items on the left to start an order.
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs">
                    <div className="flex-1 pr-2">
                      <p className="font-medium text-white truncate">{item.name}</p>
                      <p className="text-slate-400 font-mono text-[10px]">₦{item.price.toLocaleString()} each</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => updateQty(item.id, -1)} className="w-5 h-5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded flex items-center justify-center">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-bold w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-5 h-5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded flex items-center justify-center">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeFromCart(item.id)} className="text-slate-500 hover:text-red-400 ml-1">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Checkout Totals & Action */}
          <div className="pt-4 border-t border-slate-800 mt-4 space-y-3">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>VAT (7.5%)</span>
                <span>₦{tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800/60">
                <span>Total Amount</span>
                <span className="text-emerald-400">₦{total.toLocaleString()}</span>
              </div>
            </div>{/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-1.5 pt-2">
              {["Transfer", "Card", "Cash"].map(method => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={"text-[10px] font-mono py-1.5 rounded border transition-all " +
                    (paymentMethod === method
                      ? "bg-emerald-600/20 text-emerald-400 border-emerald-500 font-semibold"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white")}
                >
                  {method}
                </button>
              ))}
            </div>

            <button
              disabled={cart.length === 0}
              onClick={handleCheckout}
              className={"w-full py-2.5 rounded-lg text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all " +
                (cart.length > 0
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed")}
            >
              <CreditCard className="w-4 h-4" /> Process Payment & Print Invoice
            </button>
          </div>
        </div>

      </div>

      {/* Completed Order Modal / Digital Receipt Overlay */}
      {completedOrder && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-sm text-center font-mono">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white">Payment Processed!</h4>
            <p className="text-xs text-slate-400 mt-1">Receipt Ref: {completedOrder.orderId}</p>

            {/* Digital Receipt Card */}
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 my-4 text-left text-xs space-y-2">
              <div className="flex justify-between text-slate-400 pb-2 border-b border-slate-800 text-[10px]">
                <span>Method: {completedOrder.paymentMethod}</span>
                <span>{completedOrder.timestamp}</span>
              </div>
              <div className="space-y-1 py-1">
                {completedOrder.items.map((i, idx) => (
                  <div key={idx} className="flex justify-between text-slate-300">
                    <span>{i.qty}x {i.name}</span>
                    <span>₦{(i.price * i.qty).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-emerald-400">
                <span>Total Paid</span>
                <span>₦{completedOrder.total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => setCompletedOrder(null)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg transition-all"
            >
              Close Receipt & Next Order
            </button>
          </div>
        </div>
      )}

    </div>
  );
}