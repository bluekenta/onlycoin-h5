import { useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("Failed to copy text: ", err);
    }
  };
  return {
    copy,
    copied,
  };
};

export default useClipboard;
