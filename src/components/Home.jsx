import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from './Footer'
import { CheckCircle } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 text-white px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Organize Your <span className="text-yellow-300">Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          A clean and simple <span className="font-semibold">Todo App</span> to help you stay
          productive and never miss a task.
          Add todos, set alarms, and get browser reminders – all for free!
        </p>
        <Link to="/tasks">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-2xl shadow-lg hover:bg-yellow-300 transition-all"
          >
            Get Started 🚀
          </motion.button>
        </Link>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl"
      >
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <CheckCircle className="text-yellow-300 w-10 h-10 mb-4" />
          <h2 className="text-xl font-bold mb-2">Stay Organized</h2>
          <p className="text-gray-200 text-center">
            Add, edit, and manage todos with a beautiful, minimal interface.
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <CheckCircle className="text-yellow-300 w-10 h-10 mb-4" />
          <h2 className="text-xl font-bold mb-2">Never Miss Deadlines</h2>
          <p className="text-gray-200 text-center">
            Set reminders and alarms – get notified right in your browser.
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <CheckCircle className="text-yellow-300 w-10 h-10 mb-4" />
          <h2 className="text-xl font-bold mb-2">Works Offline</h2>
          <p className="text-gray-200 text-center">
            All tasks are stored in your browser’s localStorage, even without internet.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;
