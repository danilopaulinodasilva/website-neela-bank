import "./style.css";
import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse"; // Importa o plugin colapse

// Registra o plugin antes de iniciar o Alpine
Alpine.plugin(collapse);

window.Alpine = Alpine;
Alpine.start();
