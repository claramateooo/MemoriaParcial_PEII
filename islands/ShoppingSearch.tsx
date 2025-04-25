/* islands/ShoppingSearch.tsx */
import { useEffect, useState } from "preact/hooks";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function ShoppingSearch() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* leer ?query= al montar */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("query") ?? "";
    setQuery(q);
  }, []);

  /* cada vez que query cambie ⇒ fetch */
  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
      .then(r => r.json())
      .then((data) => {
        setProducts(data.products as Product[]);
      })
      .catch(() => setError("No se pudieron cargar los productos."))
      .finally(() => setLoading(false));
  }, [query]);

  const triggerSearch = () => {
    window.location.href = `/shopping?query=${encodeURIComponent(query.trim())}`;
  };

  return (
    <div>
      <h2 class="title-find">Busca tu producto</h2>

      <div class="flex gap-4">
        <input
          class="input-search flex-1"
          placeholder="Ej. green jersey"
          value={query}
          onInput={e => setQuery((e.target as HTMLInputElement).value)}
        />
        <button class="button-search" onClick={triggerSearch}>Buscar</button>
      </div>

      {loading && <p class="mt-6">Cargando catálogo…</p>}
      {error &&   <p class="mt-6 text-red-600">{error}</p>}

      {!loading && query && (
        products.length > 0 ? (
          <div class="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(p => (
              <div key={p.id} class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src={p.thumbnail} alt={p.title} class="w-full h-48 object-contain mb-3" />
                <h3 class="font-semibold text-sm mb-2 line-clamp-2">{p.title}</h3>
                <p class="text-indigo-700 font-bold">${p.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p class="mt-6">No se encontraron resultados para “{query}”.</p>
        )
      )}
    </div>
  );
}
