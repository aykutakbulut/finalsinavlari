"use client";

import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Worker kurulumu (PDFjs'in client side çalışması için zorunludur)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface SecurePdfViewerProps {
  pdfUrl: string;
}

export default function SecurePdfViewer({ pdfUrl }: SecurePdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resize olayında container genişliğini güncelle (Page genişliğini ayarlamak için)
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goPrev = () => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goNext = () => {
    if (numPages) {
      setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
    }
  };

  return (
    <div 
      className="flex flex-col w-full h-full relative"
      // Sağ tık menüsünü engelle
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* PDF Okuma Alanı */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto w-full flex justify-center bg-white/5 py-4 px-2 select-none"
      >
        {/* PDF Document Loader */}
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-40 text-amber-500/80 animate-pulse">
              PDF Yükleniyor...
            </div>
          }
          error={
            <div className="flex items-center justify-center h-40 text-rose-500 font-medium">
              PDF yüklenirken bir hata oluştu.
            </div>
          }
          className="flex flex-col items-center drop-shadow-2xl"
        >
          {containerWidth > 0 && (
            <Page
              pageNumber={pageNumber}
              width={Math.min(containerWidth - 32, 800)} // Maksimum genişlik sınırı ve kenar boşluğu
              renderTextLayer={false} // Metin kopyalamayı zorlaştırmak için text layer'ı kapatıyoruz
              renderAnnotationLayer={false} // Gereksiz link vs tıklanmasını engellemek için
              className="rounded-lg overflow-hidden border border-white/10 pointer-events-none" 
              // pointer-events-none sayesinde resmin üstüne basılı tutup indirme seçeneklerinin çıkması mobil dahil çok zorlaşır
            />
          )}
        </Document>
      </div>

      {/* Alt Navigasyon (Sayfalama) */}
      <div className="shrink-0 bg-[#050505]/95 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3 flex items-center justify-between z-10">
        <button
          onClick={goPrev}
          disabled={pageNumber <= 1}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 font-semibold text-sm disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all hover:bg-white/[0.08]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Önceki
        </button>

        <div className="text-sm font-bold text-amber-400 tracking-wider">
          {pageNumber} <span className="text-slate-500">/</span> {numPages || "..."}
        </div>

        <button
          onClick={goNext}
          disabled={!numPages || pageNumber >= numPages}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-amber-500/20 bg-amber-500/15 text-amber-300 font-bold text-sm disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all hover:bg-amber-500/25 hover:border-amber-400/40"
        >
          Sonraki
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
