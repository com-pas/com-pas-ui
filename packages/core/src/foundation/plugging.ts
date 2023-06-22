import { cyrb64 } from './cyrb64.js';

export type Plugin<T> = {
  name: string;
  translations?: Record<string, string>;
  src: string;
  icon: string;
  requireDoc?: boolean;
  active?: boolean;
  configuration?: T;
};

export type PluginSet = { menu: Plugin<unknown>[]; editor: Plugin<unknown>[] };

const pluginTags = new Map<string, string>();

/** @returns a valid customElement tagName containing the URI hash. */
export function pluginTag(uri: string): string {
  if (!pluginTags.has(uri)) pluginTags.set(uri, `oscd-p${cyrb64(uri)}`);
  return pluginTags.get(uri)!;
}
