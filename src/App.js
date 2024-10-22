import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
{/*      <FaceRecognition />*/}
    </div>
  );
}

export default App;
