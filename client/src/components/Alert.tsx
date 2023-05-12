import { FC, useEffect, useState } from "react";

export interface AlertProps {
  variant: "success" | "error" | "";
  message: string;
  className?: string;
  duration?: number;
  onDismiss?: () => void;
}

const Alert: FC<AlertProps> = ({
  variant,
  message,
  className,
  duration = 3000,
  onDismiss,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDismiss && onDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  let backgroundColor = "";
  switch (variant) {
    case "success":
      backgroundColor = "bg-green-500";
      break;
    case "error":
      backgroundColor = "bg-red-500";
      break;
    default:
      backgroundColor = "";
  }

  return (
    <>
      {visible && (
        <div
          className={`fixed top-0 left-0 w-full py-2 px-4 text-white rounded-lg shadow-md ${backgroundColor} ${className} animate-fade-in`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Alert;
