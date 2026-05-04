type SnapTr = {
  (...args: unknown[]): void;
  queue?: unknown[][];
};

declare global {
  interface Window {
    snaptr?: SnapTr;
  }
}

export type SnapEvent =
  | "PAGE_VIEW"
  | "VIEW_CONTENT"
  | "ADD_CART"
  | "START_CHECKOUT"
  | "PURCHASE"
  | "SIGN_UP";

export function snapTrack(event: SnapEvent, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.snaptr) return;
  if (params) window.snaptr("track", event, params);
  else window.snaptr("track", event);
}
