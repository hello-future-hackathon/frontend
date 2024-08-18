"use client";

export default function Grid() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <div key={item} className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Dataset Name</h3>
            <p className="text-gray-600">Description of Dataset.</p>
          </div>
        ))}
      </div>
    </div>
  );
}