import { useEffect, useRef } from 'react';

type VideoSegmentProps = {
  src: string;
  start: number;
  end: number;
  autoPlay?: boolean;
};

export function LoopingVideoSegment({ src, start, end }: VideoSegmentProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const onLoaded = () => {
      video.currentTime = start;
      video.play();
    };

    const onTimeUpdate = () => {
      if (video.currentTime >= end) {
        video.currentTime = start;
      }
    };

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('timeupdate', onTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [start, end]);

  return <video ref={ref} src={src} muted autoPlay loop={false} className="w-full h-full object-cover" />;
}
