/** Supplied magnifier artwork. Color inherits the control state. */
export default function ZoomIcon({
  variant = "combined",
}: {
  variant?: "combined" | "in" | "out";
}) {
  return (
    <svg
      className="zoom-icon"
      data-zoom-icon={variant}
      viewBox="0 0 26 26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        className="zoom-lens"
        d="M11.375 19.5C15.8623 19.5 19.5 15.8623 19.5 11.375C19.5 6.88769 15.8623 3.25 11.375 3.25C6.88769 3.25 3.25 6.88769 3.25 11.375C3.25 15.8623 6.88769 19.5 11.375 19.5Z"
      />
      {variant === "combined" ? (
        <>
          <path d="M8.125 10.375H14.625" />
          <path d="M8.125 15.375H14.625" />
          <path d="M11.375 7.125V13.625" />
        </>
      ) : (
        <>
          <path d="M8.125 11.375H14.625" />
          {variant === "in" && <path d="M11.375 8.125V14.625" />}
        </>
      )}
      <path d="M17.1204 17.1206L22.75 22.7502" />
    </svg>
  );
}
