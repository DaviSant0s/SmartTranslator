import Header from './components/Header';
import { RoutesApp } from './routes';

function App() {
  return (
    <>
      <Header/>
      <main className="flex-1 max-w-screen-2xl mx-auto px-5 py-15 w-full">
        <RoutesApp />
      </main>
    </>
  );
}

export default App;
