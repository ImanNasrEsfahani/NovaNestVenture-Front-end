'use client';
import { useState } from "react";

const accordionData = [
  {
    header: "Business Concept Assessment & Development",
    content: [
      "Assessing the client’s management experience and education in the context of a qualifying Canadian business",
      "Identifying economic priorities in Canada and matching them with the client’s qualifications and proposed concepts",
      "Collaborating with incubators and angel investors to evaluate and enhance the business concept",
      "Assisting the client in developing a business concept that meets the requirements for a Letter of Support / Commitment Certificate",
    ],
  },
  {
    header: "Business Documentation & Preparation",
    content: [
      "Creating a professional Pitch Deck",
      "Drafting a Business Plan within Canadian startup market standards",
      "Business consultations, valuation assessments, and financial projections",
      "Reviewing Pro Forma financial documents",
      "Intellectual property review and filing patents (where applicable)",
      "Incorporation, minute book preparation, and legal structuring",
    ],
  },
  {
    header: "Support with Designated Organizations",
    content: [
      "Presenting the client’s profile to designated entities",
      "Coaching the client for all meetings and interviews with incubators",
      "Supporting the client during Committee Review, Deal Screening, Coaching Meetings and related undertakings",
      "Advising the client on compliance with the terms of the Letter of Support / Commitment Certificate",
    ],
  },
  {
    header: "Immigration & Application Support",
    content: [
      "Providing a checklist of required documents",
      "Reviewing all documents and addressing potential issues",
      "Drafting templates for required letters",
      "Completing and reviewing all immigration forms",
      "Preparing and submitting the complete immigration application to IRCC",
      "Handling all correspondence with Canadian immigration authorities",
      "Applications for work permits (client and spouse), study permits for children, and permanent residency",
      "Landing services including guidance for opening a bank account, obtaining a SIN, and more",
    ],
  },
];

export default function OurServicesAccardions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {accordionData.map((item, idx) => (
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
