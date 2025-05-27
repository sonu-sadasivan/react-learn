function PanelDemo(){
    return (
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-blue-600 text-white p-4 text-xl font-bold">
            Header
          </header>
    
          {/* Body */}
          <div className="flex flex-1">
            {/* Left Side Panel */}
            <aside className="w-1/6 bg-gray-200 p-4">Left Side Panel</aside>
    
            {/* Main Content */}
            <main className="flex-1 bg-white p-4">Main Content Panel</main>
    
            {/* Right Side Panel */}
            <aside className="w-1/6 bg-gray-100 p-4">Right Side Panel</aside>
          </div>
    
          {/* Footer */}
          <footer className="bg-blue-600 text-white p-4 text-center">
            Footer
          </footer>
        </div>
      );
}

export default PanelDemo;