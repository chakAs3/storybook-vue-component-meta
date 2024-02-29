## Demo Repository for Enhanced Storybook Docgen Configuration

This repository demonstrates the utilization of Storybook's docgen configuration, leveraging Volar's `vue-component-meta` for improved type definitions synchronized with the latest updates from the Vue core team.

### Configuration Setup

To configure your Storybook docgen to utilize Volar's `vue-component-meta`, follow these steps:

1. Open `.storybook/main.ts` in your project.
2. Ensure you have the necessary imports:

```typescript
import type { StorybookConfig } from '@storybook/vue3-vite';
```

3. Configure your Storybook with the following settings:

```typescript
const config: StorybookConfig = {
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: "vue-component-meta"
    },
  },
};

export default config;
```

### Component Meta Extraction from Various File Types

The component meta extraction functionality supports multiple file types, including `.vue`, `.js`, `.ts`, `.tsx`, and `.jsx`. Regardless of the file extension, you can now extract component metadata seamlessly. This improvement enables a unified approach to extracting component meta across different file formats, ensuring consistent and efficient development workflows.

### Props Type Definition Extraction

This update includes the extraction of props type definitions, supporting various types and structures:

- String (e.g., 'Foo')
- Array of strings (e.g., ['Baz', 'Bar', 'Foo'])
- Number (e.g., 1)
- Union types with optional values (e.g., 'Foo' | undefined)
- Union types (e.g., 'Foo' | 'Baz')
- Object with inline properties (e.g., { foo: 'Foo' })
- Object with nested properties (e.g., { nestedProp: 'Nested Prop' })
- Object with intersection types (e.g., { nestedProp: 'Nested Prop', additionalProp: 'Additional Prop' })
- Array of objects with properties (e.g., [{ foo: 'Foo' }])
- Literal types (e.g., ['Uncategorized', 'Display', 'Addons'])
- Enum types (e.g., MyEnum.Small)
- Recursive object types (e.g., { recursive: { recursive: { recursive: 'recursive' } } })

### Props Description and Tag Annotation Support

In addition to type definition extraction, this update introduces support for props description and tag annotations. Now, you can provide descriptive explanations for props, enhancing component documentation and facilitating better understanding. Tags annotations further enrich the documentation, enabling categorization and organization of props based on their functionality or purpose.

### Availability

This feature is available starting from [Storybook v8.0.0-beta.5](https://github.com/storybookjs/storybook).

### Illustrative Use Cases

This demo repository showcases various use cases typical of Vue components. Explore the provided components to understand how to leverage the enhanced type definitions, props description, and tag annotation support, and benefit from the latest updates from the Vue core team.