import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

export default function GlobalAudioControl() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <div className="fixed top-4 right-4 z-50 group">
      <button
        onClick={toggleMute}
        className="flex items-center justify-center w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10"
        aria-label={isMuted ? 'Unmute all audio' : 'Mute all audio'}
        title={isMuted ? 'Unmute all audio' : 'Mute all audio'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white group-hover:text-white/80 transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-white group-hover:text-white/80 transition-colors" />
        )}
      </button>
      
      {/* Small indicator text that appears on hover */}
      <div className="absolute top-14 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {isMuted ? 'Unmute all' : 'Mute all'}
        </div>
      </div>
    </div>
  );
}