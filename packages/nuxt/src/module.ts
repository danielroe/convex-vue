import { defineNuxtModule, createResolver, addImports, addImportsDir } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'convex-nuxt',
    configKey: 'convex'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url);

    addImports([
      {
        from: '@convex-vue/core',
        name: 'useConvex'
      },
      {
        from: '@convex-vue/core',
        name: 'useAction'
      },
      {
        from: '@convex-vue/core',
        name: 'useMutation'
      }
    ]);
    addImportsDir(resolver.resolve('./runtime/composables'));
  }
});
