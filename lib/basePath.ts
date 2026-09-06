/**
 * Base path the site is served under ("" at a domain root, "/repo" for a
 * GitHub project page). `next/image` and `next/link` apply this themselves;
 * plain <a href> and other raw URLs need `withBasePath`.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
