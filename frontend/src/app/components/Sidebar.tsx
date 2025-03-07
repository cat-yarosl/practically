const Sidebar = () => {
    return (
      <aside className="bg-gray-800 w-64 p-5">
        <h2 className="text-xl font-bold mb-4">Bookmarks</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://example.com" className="text-blue-500">Example Link 1</a></li>
          <li><a href="https://example.com" className="text-blue-500">Example Link 2</a></li>
          <li><a href="https://example.com" className="text-blue-500">Example Link 3</a></li>
          <li><a href="https://example.com" className="text-blue-500">Example Link 4</a></li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;