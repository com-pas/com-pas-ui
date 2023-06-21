export type Plugin = {
    name: string;
    translations?: Record<string, string>;
    src: string;
    icon: string;
    requireDoc?: boolean;
    active?: boolean;
};
export type PluginSet = {
    menu: Plugin[];
    editor: Plugin[];
};
/** @returns a valid customElement tagName containing the URI hash. */
export declare function pluginTag(uri: string): string;
