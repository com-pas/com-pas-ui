import { LitElement } from 'lit';

import { property, state } from 'lit/decorators.js';

import { Plugin, PluginSet, pluginTag } from '@openscd/open-scd-core';

import { LitElementConstructor } from '../foundation.js';

export interface PluginMixin {
  loadedPlugins: Map<string, Plugin>;
  plugins: Partial<PluginSet>;
}

type ReturnConstructor = new (...args: any[]) => LitElement & PluginMixin;

export function Plugging<TBase extends LitElementConstructor>(
  Base: TBase
): TBase & ReturnConstructor {
  class PluggingElement extends Base {
    #loadedPlugins = new Map<string, Plugin>();

    @state()
    get loadedPlugins(): Map<string, Plugin> {
      return this.#loadedPlugins;
    }

    #plugins: PluginSet = { menu: [], editor: [] };

    /**
     * @prop {PluginSet} plugins - Set of plugins that are used by OpenSCD
     */
    @property({ type: Object })
    get plugins(): PluginSet {
      return this.#plugins;
    }

    set plugins(plugins: Partial<PluginSet>) {
      Object.values(plugins).forEach(kind =>
        kind.forEach(plugin => {
          const tagName = pluginTag(plugin.src);
          if (this.loadedPlugins.has(tagName)) return;
          this.#loadedPlugins.set(tagName, plugin);
          if (customElements.get(tagName)) return;
          const url = new URL(plugin.src, window.location.href).toString();
          import(url).then(mod => customElements.define(tagName, mod.default));
        })
      );

      this.#plugins = { menu: [], editor: [], ...plugins };
      this.requestUpdate();
    }
  }
  return PluggingElement;
}
