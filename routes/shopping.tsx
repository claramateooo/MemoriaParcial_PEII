import InteractiveForm from "../islands/InteractiveForm.tsx";
import ShoppingSearch from "../islands/ShoppingSearch.tsx";

export default function Shopping(){
    return(
        <div class="p-6">
        <ShoppingSearch />
        {/* Aquí puedes luego mostrar los productos obtenidos por la API */}
      </div>
    )
}