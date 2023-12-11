// Import the Hero and Demo components
import Hero from "./components/Hero";
import Demo from "./components/Demo";

// Import the global styles
import "./App.css";

// Define the main App component
const App = () => {
  return (
    // Main container
    <main>
      {/* Background gradient */}
      <div className='main'>
        <div className='gradient' />
      </div>

      {/* Application content container */}
      <div className='app'>
        {/* Render the Hero component */}
        <Hero />
        
        {/* Render the Demo component */}
        <Demo />
      </div>
    </main>
  );
};

// Export the App component
export default App;
