import Header from '@/components/Header';
import PdfViewer from '@/components/PdfViewer';

export default function BubbesBookPage() {
  return (
    <div className="flex flex-col h-screen pb-16">
      <Header />
      <main className="flex-1 overflow-hidden">
        <PdfViewer pdfUrl="/bubbes-book.pdf" />
      </main>
    </div>
  );
}
