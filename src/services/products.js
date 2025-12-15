export async function fetchProducts(signal) {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      signal,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Fetch failed");
    }

    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") return;
    throw err;
  }
}
