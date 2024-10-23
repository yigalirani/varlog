declare module 'varlog' {
  /**
   * CSS styles for the varlog visualization
   */
  export const css: string;

  /**
   * Dumps a JavaScript variable into an HTML visualization with drill-down capability
   * @param name - The name/label for the variable being dumped
   * @param value - The value to dump and visualize
   * @param depth - Maximum depth to traverse when displaying nested objects (default: 3)
   * @returns HTML string containing the interactive visualization
   */
  export function dump(name: string, value: any, depth?: number): string;
}