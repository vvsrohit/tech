## Code Examples

### Creating a Simple Component
Here is an example of how to create a basic functional component in this project:

```jsx
// src/components/Welcome.js
export default function Welcome({ name }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold">Hello, {name}!</h1>
      <p>Welcome to the IEEE PatchFest Tech Challenge.</p>
    </div>
  );
}