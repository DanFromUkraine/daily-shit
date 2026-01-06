export function createDebounce(wait: number) {
  let lastTimerId: ReturnType<typeof setTimeout> | null = null;

  return <T extends any[]>(
    action: (...args: T) => void | Promise<void>,
    args: T,
    options?: { onError: (e: any) => void },
  ) => {
    if (lastTimerId) clearTimeout(lastTimerId);

    lastTimerId = setTimeout(async () => {
      try {
        await action(...args);

        console.debug("debounce done");
      } catch (e) {
        options?.onError(e);
      } finally {
        lastTimerId = null;
      }
    }, wait);
  };
}
