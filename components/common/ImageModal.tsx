// ImageModal.js
import Image from 'next/image';

export default function ImageModal({ src, alt, onClose }: any) {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <Image
        className="modal-content"
        src={src}
        alt={alt}
        width={1000}
        height={1000}
      />
    </div>
  );
}
