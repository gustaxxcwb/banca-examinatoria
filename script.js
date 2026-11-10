
/* CONFIGURAÇÃO DO WHATSAPP */

// Coloque o DDD e o número da loja.
// Exemplo: 5511999999999

const numeroWhatsApp = "5541995719408";

const mensagem = "Olá! Conheci a Closet Mix pelo site e gostaria de saber mais sobre a loja.";

const linkWhatsApp =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

// Botão principal de contato
document.getElementById("whatsapp-button").href = linkWhatsApp;

// Botão do cabeçalho
document.querySelector(".header-button").href = linkWhatsApp;
