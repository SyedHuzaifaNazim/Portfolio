'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1500); 

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex space-x-2">
        <link rel="preload" as="image" href="images/vector-letter-s-logo-collection-initial-shn-logo-design-template_1139332-16.avif" className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></link>
        {/* <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" />
        <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-150" />
        <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-300" /> */}
      </div>
    </div>
  );
}
