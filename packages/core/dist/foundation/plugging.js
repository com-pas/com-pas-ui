import { cyrb64 } from './cyrb64.js';
const pluginTags = new Map();
/** @returns a valid customElement tagName containing the URI hash. */
export function pluginTag(uri) {
    if (!pluginTags.has(uri))
        pluginTags.set(uri, `oscd-p${cyrb64(uri)}`);
    return pluginTags.get(uri);
}
//# sourceMappingURL=plugging.js.map