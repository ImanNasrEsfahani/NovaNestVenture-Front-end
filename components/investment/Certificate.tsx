import React, { useState } from 'react';
import ImageModal from '@/components/common/ImageModal';
import Image from 'next/image';
import Link from 'next/link';

export default function Certificate() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);

  return (
    <Link href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpDtls.html?corpId=12980266">
      <div onClick={showModal}>
        <Image
          src="/static/images/investment/Incorporation-1.png"
          alt="Certificate"
          width={1000}
          height={1000}
        />
        {isOpen && (
          <ImageModal
            src="/static/images/investment/Incorporation-page-001 1 (3).png"
            alt="Certificate"
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </Link>
  );
}
