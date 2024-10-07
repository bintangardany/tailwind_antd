

const Pagination = () => {
  return (
<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-5">
<div className="flex flex-1 justify-between sm:hidden">
  <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
  <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
</div>

<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
  <p className="text-sm text-gray-700">Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results</p>
  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
    {Array.from({ length: 10 }, (_, index) => (
      <a key={index} href="#" className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${index === 0 ? 'bg-blue-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}`}>
        {index + 1}
      </a>
    ))}
    <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <span className="sr-only">Next</span>
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
      </svg>
    </a>
  </nav>
</div>
</div>

  );
};

export default Pagination