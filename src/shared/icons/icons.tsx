import { FC } from "react";

interface IProps {
  className?: string;
  color?: string;
}

export const DashboardMenuIcon: FC<IProps> = ({ color = "#7A7C7F" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <g clipPath="url(#clip0_15_97)">
      <path d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_15_97">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
