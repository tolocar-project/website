import React from "react";

interface Props {
  className?: string;
}

const FacebookIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 12.073C24 5.403 18.63 0 12 0 5.371 0 0 5.404 0 12.073 0 18.11 4.355 23.123 10.113 24v-8.422H7.065v-3.505h3.048V9.444c0-3.018 1.79-4.722 4.5-4.722 1.355 0 2.71.244 2.71.244v2.97h-1.5c-1.5 0-1.984.924-1.984 1.898v2.239h3.338l-.532 3.505H13.84V24C19.597 23.124 24 18.11 24 12.073Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FacebookIcon;
