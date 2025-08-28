import React from "react";

interface MessageBubbleProps {
  text: string;
  position?: "left" | "right";
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  position = "left",
}) => {
  const baseStyles =
    "min-w-[250px] px-4 py-2 rounded-2xl text-sm  shadow-md break-words";

  const positionStyles =
    position === "left"
      ? "bg-gray-200 text-black rounded-bl-none"
      : "bg-blue-500 text-white rounded-br-none";

  return (
    <div className={`inline-block ${baseStyles} ${positionStyles}`}>{text}</div>
  );
};
