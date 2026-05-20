export const openInChrome = (url: string) => {
  const userConfirmed = confirm("Open this link in Chrome?");
  
  if (userConfirmed) {
    // Opens in new tab/window with Chrome
    window.open(url, "_blank");
  }
};

export const useOpenInChrome = () => {
  return { openInChrome };
};
