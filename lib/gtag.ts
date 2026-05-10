export const GA_MEASUREMENT_ID = "G-B9RWHF6MQ6";

/** SPA 遷移および初回表示で page_path を送る（send_page_view は gtag config で発火） */
export function sendPageView(url: string): void {
  if (typeof window === "undefined") return;
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
