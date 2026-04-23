import "./Badge.css";

interface BadgeProps {
  status: "Active" | "Completed" | string;
}

export const Badge = ({ status }: BadgeProps) => {
  return <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>;
};
