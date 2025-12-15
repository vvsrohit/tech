export async function fetchPosts() {
  // Simulate a delay so we can see the loading skeleton
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  
  if (!response.ok) {
    throw new Error("Failed to fetch data from server");
  }
  
  return response.json();
}