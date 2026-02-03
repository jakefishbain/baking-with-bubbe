'use client';

import { useState, useEffect } from 'react';

interface PdfViewerProps {
  pdfUrl: string;
}

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-amber-50 p-6 text-center">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">
          Bubbe&apos;s Recipe Book
        </h2>
        <p className="text-amber-700 mb-6 max-w-sm">
          Tap the button below to open the recipe book in your device&apos;s PDF viewer.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 active:bg-amber-800 transition-colors"
        >
          Open Recipe Book
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <iframe
        src={pdfUrl}
        className="w-full h-full border-0"
        title="Bubbe's Recipe Book"
      />
    </div>
  );
}
