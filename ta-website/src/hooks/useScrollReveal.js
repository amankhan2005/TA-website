import { useRef } from 'react';
import { useInView } from 'framer-motion';
export function useScrollReveal(margin = '-72px 0px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}
