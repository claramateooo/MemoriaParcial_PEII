import { useState } from "preact/hooks";

export default function InteractiveForm() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      // Redirige a la ruta /shopping con el parámetro
      window.location.href = `/shopping?query=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div>
      <h2 class="title-find">¡Encuentra lo que buscas!</h2>
      <input
        type="text"
        placeholder=" Escribe un producto..."
        value={query}
        onInput={(e) => setQuery(e.currentTarget.value)}
        class="input-search"
      />
      <div class="w-full flex justify-center mt-6 space-x-4 z-10">
        <button onClick={handleSearch} class="button-search">
          Buscar
        </button>
      </div>
    </div>
  );
}
