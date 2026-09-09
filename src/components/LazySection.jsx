import { Suspense, useEffect, useRef, useState } from 'react';

// IntersectionObserver wrapper: children render (and their lazy chunk downloads)
// only when the placeholder scrolls near the viewport. Keeps below-fold section
// code out of the initial parse on mobile.
export default function LazySection({ children, height = 320 }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin: '800px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ready]);

  if (!ready) {
    return <div ref={ref} style={{ minHeight: height }} aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div style={{ minHeight: height }} aria-hidden="true" />}>
      {children}
    </Suspense>
  );
}
