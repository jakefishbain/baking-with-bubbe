interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
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
