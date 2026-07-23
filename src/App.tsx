import ProfileCard from './components/ProfileCard'
import Background from './components/Background'
import './App.css'
import { useRef } from 'react'

function App() {
const audioRef = useRef<HTMLAudioElement>(null);
const startMusic = () => {
  audioRef.current?.play();
}

  return (

    <div onClick={startMusic} className='app-background min-h-screen w-full flex items-center justify-center'>
      
      <Background videoURL='/Blink-eye-background.mp4'/>
      <audio ref={audioRef} src='/seeme.mp3' loop></audio>
      <div className='content-wrapper'>
       <ProfileCard
          name="Harsh"
          tagline="Harsh's links"
          location="WonderLand"
          username="Wizard"
          lastSeen="2 hours ago"
          avatarUrl="/favicon.svg"
        />
      </div>
    </div>
   
  )
}

export default App
