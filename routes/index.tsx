
import AboutSeection from "../islands/AboutSeection.tsx";
import InteractiveForm from "../islands/InteractiveForm.tsx";


import TestButton from "../islands/TestButton.tsx";

export default function Home() {
  return (
    <div class="container">
    <div class="title-container">
      <h1 class="title">SmartDe<span class="highlight">AI</span>s</h1>
      </div>
    
        <InteractiveForm />
        <AboutSeection />
        <TestButton />
    </div>
  );
}
