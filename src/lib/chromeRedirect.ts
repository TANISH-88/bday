export const openInChrome = (url: string) => {
  const message = "Would you like to open this in Chrome?";
  
  if (confirm(message)) {
    // For desktop, attempt to open with Chrome protocol
    const chromeUrl = `googlechrome://${url.replace(/^https?:\/\//, "")}`;
    
    // Try opening with Chrome protocol first
    const newWindow = window.open(chromeUrl, "_blank");
    
    // If Chrome protocol fails, fall back to regular window.open
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.open(url, "_blank");
    }
  }
};

export const useOpenInChrome = () => {
  return { openInChrome };
};
