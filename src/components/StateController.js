"use client";
import { useGlobalStore } from "../context/GlobalStore";

export default function StateController() {
  const { theme, toggleTheme, fontSize, updateFontSize } = useGlobalStore();

  return (
    <div className={`p-6 rounded-xl border shadow-lg transition-all mb-8 ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'
    }`}>
      <h3 className="font-bold mb-4 text-xl border-b pb-2 border-gray-300 dark:border-gray-600">
        Custom Global Store
      </h3>
      
      <div className="flex flex-col gap-6">
        
        {/* Theme Control */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">App Theme</p>
            <p className="text-sm opacity-70">Current: {theme.toUpperCase()}</p>
          </div>
          <button 
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg font-bold transition-colors ${
              theme === 'dark' ? 'bg-yellow-400 text-black' : 'bg-gray-900 text-white'
            }`}
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Font Size Control */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Font Size</p>
            <p className="text-sm opacity-70">Current: {fontSize}</p>
          </div>
          <div className="flex gap-2">
            {['small', 'medium', 'large'].map((size) => (
              <button
                key={size}
                onClick={() => updateFontSize(size)}
                className={`w-8 h-8 rounded flex items-center justify-center font-bold border transition-all ${
                  fontSize === size 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-transparent border-gray-400 opacity-60 hover:opacity-100'
                }`}
              >
                {size[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}