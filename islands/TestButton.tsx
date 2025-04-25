import { useState } from "preact/hooks";

export default function TestButton() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTest = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí podrías almacenar los datos en una base de datos
    setFormSubmitted(true);
  };

  return (
    <div class="test-container relative flex flex-col items-center justify-center w-full mt-6 p-8 rounded-xl shadow-xl">
      {/* GIF de fondo */}
      <img 
        src="https://www.coopersystem.com.br/wp-content/uploads/2019/04/o-que-%C3%A9-um-software-sob-medida.png" 
        alt="Test GIF" 
        class="gif-background"
      />

      <div class="relative z-10 flex flex-col items-center">
        {/* Botón del test */}
        {!formSubmitted ? (
          <button onClick={handleTest} class="button-test">
            Realizar Test de Personalización
          </button>
        ) : (
          <div>
            <h3>¡Resultados almacenados correctamente!</h3>
            <button onClick={() => window.location.href = "/shopping"} class="button-submit mt-4">
              Ir a la compra
            </button>
          </div>
        )}
      </div>

      {/* Modal con el formulario */}
      {showForm && !formSubmitted && (
        <div class="modal-overlay">
          <div class="modal-form">
            <button class="close-button" onClick={closeForm}>✖</button>
            <h2 class="form-title">📝 Personaliza tu experiencia de compra</h2>

            <form onSubmit={handleSubmit}>
              {/* Solo los campos esenciales */}
              <label>Presupuesto estimado por producto:</label>
              <select>
                <option>Menos de 20€</option>
                <option>Entre 20€ y 50€</option>
                <option>Entre 50€ y 100€</option>
                <option>Más de 100€</option>
              </select>

              <label>Estilo preferido:</label>
              <select>
                <option>Casual</option>
                <option>Deportivo</option>
                <option>Formal</option>
                <option>Elegante</option>
              </select>

              <label>Color preferido:</label>
              <input type="text" placeholder="Rojo, Azul, Negro..." />

              <button type="submit" class="button-submit mt-4">Enviar respuestas</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
