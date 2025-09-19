'use client';
import { useState } from "react";

interface AccordionItem {
  header: string;
  content: string[];
}

interface OurServicesAccardionsProps {
  data: AccordionItem[];
}

export default function OurServicesAccardions({ data }: OurServicesAccardionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {data.map((item, idx) => (
        <div key={idx} className="mb-4 border rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 bg-gray-200 font-semibold text-lg focus:outline-none flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {item.header}
            <span className="ml-2">{openIndex === idx ? "−" : "+"}</span>
          </button>
          {openIndex === idx && (
            <ul className="px-8 py-4 space-y-2 text-gray-800 text-sm">
              {item.content.map((c, i) => (
                <li key={i} className="list-disc ml-4">{c}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
