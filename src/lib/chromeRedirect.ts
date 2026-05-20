const buildChromeUrl = (url: string) => {
  const parsedUrl = new URL(url, window.location.href);
  const protocol = parsedUrl.protocol.replace(":", "");
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isAndroid) {
    return {
      targetUrl: `intent://${parsedUrl.host}${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}#Intent;scheme=${protocol};package=com.android.chrome;end`,
      useLocation: true,
    };
  }

  if (isIOS) {
    const chromeScheme = parsedUrl.protocol === "https:" ? "googlechromes:" : "googlechrome:";
    return {
      targetUrl: `${chromeScheme}//${parsedUrl.host}${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`,
      useLocation: true,
    };
  }

  return { targetUrl: parsedUrl.href, useLocation: false };
};

export const openInChrome = (url: string) => {
  if (!confirm("Open this link in Chrome?")) {
    return;
  }

  const { targetUrl, useLocation } = buildChromeUrl(url);

  if (useLocation) {
    window.location.href = targetUrl;
    return;
  }

  window.open(targetUrl, "_blank", "noopener,noreferrer");
};

export const useOpenInChrome = () => {
  return { openInChrome };
};
