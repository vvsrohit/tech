"use client";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/api";

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const posts = await fetchPosts();
      setData(posts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // 1. Loading State (Skeleton UI)
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white dark:bg-gray-900 shadow-sm animate-pulse">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  // 2. Error State (Retry UI)
  if (error) {
    return (
      <div className="p-8 text-center border border-red-200 bg-red-50 rounded-xl max-w-md mx-auto">
        <h3 className="text-xl font-bold text-red-600 mb-2">Network Error</h3>
        <p className="text-gray-600 mb-6">{error}</p>
        <button 
          onClick={loadData}
          className="px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors"
        >
          Try Again ↻
        </button>
      </div>
    );
  }

  // 3. Success State (Real Data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {data.map((post) => (
        <div key={post.id} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all">
          <h3 className="font-bold text-lg mb-3 text-blue-600 capitalize">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {post.body}
          </p>
        </div>
      ))}
      
      <div className="col-span-full text-center mt-8">
        <button 
          onClick={loadData}
          className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
        >
          Reload Data
        </button>
      </div>
    </div>
  );
}