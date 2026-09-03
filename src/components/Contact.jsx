import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  // Replace with your Web3Forms access key
  const ACCESS_KEY = 'ce26ad2e-5942-453f-9dc4-7d1ef440d437';

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    formData.append('access_key', ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Have a project in mind, an opportunity, or a technical inquiry? Send a message directly below.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{
            x: [0, -4, 4, -4, 4, -2, 2, 0],
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          className="glass-panel bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative group"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-indigo-400 flex items-center gap-2 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" /> Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none transition-colors duration-200 placeholder:text-slate-600 font-mono"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-indigo-400 flex items-center gap-2 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none transition-colors duration-200 placeholder:text-slate-600 font-mono"
                />
              </div>
            </div>{/* Message Input */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-indigo-400 flex items-center gap-2 uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" /> Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Outline your project scope or collaboration details..."
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none transition-colors duration-200 placeholder:text-slate-600 font-mono resize-none"
              />
            </div>

            {/* Notification Feedback */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                <CheckCircle className="w-4 h-4" /> Message sent successfully! I will respond shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-rose-400 text-sm font-mono bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
                <AlertCircle className="w-4 h-4" /> An error occurred. Please try again later.
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{
                scale: 1.02,
                x: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/20 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}