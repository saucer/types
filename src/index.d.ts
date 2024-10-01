export enum WindowEdge
{
  top = 1 << 0,
  bottom = 1 << 1,
  left = 1 << 2,
  right = 1 << 3,
}

declare global
{
  interface Window
  {
    saucer: {
      windowEdge: WindowEdge;

      startDrag: () => Promise<void>;
      startResize: (edge: WindowEdge) => Promise<void>;

      call: <T>(name: string, params: unknown[]) => Promise<T>;
      exposed: { [key: string]: <T>(...params: unknown[]) => Promise<T> };
    };
  }
}

export {};