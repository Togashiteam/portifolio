interface AudioPlayerProps {
  countUpSoundEffect: React.RefObject<HTMLAudioElement>;
  countDownSoundEffect: React.RefObject<HTMLAudioElement>;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  countUpSoundEffect,
  countDownSoundEffect,
}) => (
  <>
    <audio
      ref={countUpSoundEffect}
      src="https://cdn.freesound.org/previews/451/451271_4347097-lq.mp3"
    />
    <audio
      ref={countDownSoundEffect}
      src="https://cdn.freesound.org/previews/523/523456_1646610-lq.mp3"
    />
  </>
);
export default AudioPlayer;
