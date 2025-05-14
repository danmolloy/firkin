import { useEffect, useState } from 'react';

export function useImageLoadProgress(selector: string) {
  const [realProgress, setRealProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll(selector)) as HTMLImageElement[];
    if (images.length === 0) return;

    let loadedCount = 0;

    const updateRealProgress = () => {
      loadedCount += 1;
      const nextProgress = Math.round((loadedCount / images.length) * 100);
      setRealProgress(nextProgress);
    };

    images.forEach((img) => {
      if (img.complete) {
        updateRealProgress();
      } else {
        img.addEventListener('load', updateRealProgress);
        img.addEventListener('error', updateRealProgress); // treat as loaded
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', updateRealProgress);
        img.removeEventListener('error', updateRealProgress);
      });
    };
  }, [selector]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= realProgress) return prev;
        return prev + 1;
      });
    }, 15); // Controls animation speed

    return () => clearInterval(interval);
  }, [realProgress]);

  return displayProgress;
}
