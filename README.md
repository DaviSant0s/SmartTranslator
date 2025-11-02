# SmartTranslator - Tradutor Visual Inteligente

Este é um projeto acadêmico desenvolvido para a disciplina de Cliente/Servidor com Web Service da Universidade Federal do Rio Grande (FURG).

O SmartTranslator é uma plataforma web de aprendizado de idiomas que vai além da tradução simples. Ao digitar uma palavra, a aplicação utiliza Inteligência Artificial (Google Gemini) para fornecer a tradução, frases de exemplo e tópicos relacionados, enquanto consome a API do Unsplash para exibir um contexto visual com imagens relevantes.

## Funcionalidades

* Tradução de palavras entre múltiplos idiomas.
* Geração de frases de exemplo contextuais usando a API do Gemini.
* Geração de palavras-chave e tópicos relacionados (ex: "Cotidiano", "Trabalho").
* Exibição de galeria de imagens relevantes da API do Unsplash.
* Interface reativa com estado de *loading* durante as chamadas de API.

## Tecnologias Utilizadas

* **Frontend:** React (com Vite.js)
* **Linguagem:** TypeScript
* **APIs Consumidas:**
    * Google Gemini (via `@google/genai`)
    * Unsplash API (via `fetch`)
    * OpenAI (código de serviço presente)

---

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local.

### 1. Pré-requisitos

* Node.js (v18 ou superior)
* `npm` ou `yarn`

### 2. Clonar o Repositório

```bash
git clone https://github.com/DaviSant0s/SmartTranslator.git
cd smart-translator