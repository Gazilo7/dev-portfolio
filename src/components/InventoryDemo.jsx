import React, { useState } from 'react';
import { AlertTriangle, Plus, Search, Sparkles, Trash2 } from 'lucide-react';

const initialProducts = [
  { id: 1, name: "Executive Leather Chair", category: "Furniture", stock: 12, price: 85000, minStock: 5 },
  { id: 2, name: "Wireless Ergonomic Mouse", category: "Electronics", stock: 3, price: 15000, minStock: 5 },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", stock: 2, price: 45000, minStock: 4 },
  { id: 4, name: "Standing Desk Converter", category: "Furniture", stock: 8, price: 120000, minStock: 3 },
];

export default function InventoryDemo() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", category: "Electronics", stock: 1, price: 0, minStock: 5 });

  const lowStockItems = products.filter(p => p.stock <= p.minStock);
  const totalValue = products.reduce((acc, p) => acc + (p.stock * p.price), 0);

  const handleStockChange = (id, delta) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        const updatedStock = Math.max(0, p.stock + delta);
        return { ...p, stock: updatedStock };
      }
      return p;
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || newProduct.price <= 0) return;
    
    setProducts([
      ...products,
      { ...newProduct, id: Date.now(), price: Number(newProduct.price), stock: Number(newProduct.stock), minStock: Number(newProduct.minStock) }
    ]);
    
    setNewProduct({ name: "", category: "Electronics", stock: 1, price: 0, minStock: 5 });
    setShowAddModal(false);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => { return p.id !== id; }));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-5xl mx-auto my-8 text-white shadow-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold font-mono text-indigo-400">Retail & Boutique Inventory</h3>
          <p className="text-xs text-slate-400 mt-1">Live PoC Demo — Real-time stock audit & automated reorder warnings</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold px-4 py-2 rounded-lg transition-all"
        >
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
          <p className="text-slate-400 text-xs font-mono">Total SKUs Managed</p>
          <p className="text-2xl font-bold mt-1 text-white">{products.length}</p>
        </div>
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
          <p className="text-slate-400 text-xs font-mono">Low Stock Alerts</p>
          <p className={"text-2xl font-bold mt-1 " + (lowStockItems.length > 0 ? "text-amber-400" : "text-emerald-400")}>
            {lowStockItems.length}
          </p>
        </div>
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
          <p className="text-slate-400 text-xs font-mono">Active Capital Valuation</p>
          <p className="text-2xl font-bold mt-1 text-emerald-400">
            ₦{totalValue.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full sm:w-80"><Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search catalog by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-800">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-slate-400 font-mono border-b border-slate-800">
            <tr>
              <th className="p-3">Item Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock Count</th>
              <th className="p-3">Unit Price</th>
              <th className="p-3">Status / AI Insight</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
            {products
              .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(p => {
                const isLow = p.stock <= p.minStock;
                const suggestedReorder = isLow ? (p.minStock * 2) - p.stock : 0;

                return (
                  <tr key={p.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3 font-medium text-white">{p.name}</td>
                    <td className="p-3 text-slate-400">{p.category}</td>
                    <td className="p-3 font-mono">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleStockChange(p.id, -1)}
                          className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center"
                        >-</button>
                        <span className="w-6 text-center font-bold text-sm">{p.stock}</span>
                        <button 
                          onClick={() => handleStockChange(p.id, 1)}
                          className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center"
                        >+</button>
                      </div>
                    </td>
                    <td className="p-3 font-mono text-slate-300">₦{p.price.toLocaleString()}</td>
                    <td className="p-3">
                      {isLow ? (
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 w-fit font-mono">
                            <AlertTriangle className="w-3 h-3" /> Reorder Alert
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] text-indigo-300 font-mono">
                            <Sparkles className="w-2.5 h-2.5 text-indigo-400" /> AI Rec: Restock +{suggestedReorder} units
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                          Optimal Stock
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <button 
                        onClick={() => handleDelete(p.id)}
                        className="text-slate-500 hover:text-red-400 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-md">
            <h4 className="text-lg font-bold font-mono text-white mb-4">Add Inventory Item</h4>
            <form onSubmit={handleAddProduct} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-400 mb-1">Item Name</label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                  placeholder="e.g. Wireless Barcode Scanner"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Price (NGN)</label>
                  <input
                    type="number"
                    required
                    value={newProduct.price}
                    onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Initial Stock</label>
                  <input
                    type="number"
                    required
                    value={newProduct.stock}
                    onChange={e => setNewProduct({...newProduct, stock: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Min Threshold</label>
                  <input
                    type="number"
                    required
                    value={newProduct.minStock}
                    onChange={e => setNewProduct({...newProduct, minStock: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
                >
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}