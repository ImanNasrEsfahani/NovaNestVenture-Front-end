

export default function Chevron({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <>
      {direction === 'left' ? (
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-chevron-left h-6 w-6 cursor-pointer text-white hover:text-primary md:h-10 md:w-10 rtl:-scale-100"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      ) : (
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-chevron-right h-6 w-6 cursor-pointer text-white hover:text-primary md:h-10 md:w-10 rtl:-scale-100"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      )}
    </>
  );
}
