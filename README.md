# Portfólio - Pedro Maia

Portfólio pessoal desenvolvido para apresentar meus projetos, experiência profissional e formas de contato. Uma aplicação moderna, responsiva e com animações fluidas.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)

## ✨ Funcionalidades

- **Hero** — Apresentação com animações de entrada e links para redes sociais (GitHub, LinkedIn)
- **Sobre** — Seção com informações pessoais e perfil profissional
- **Tecnologias** — Stack tecnológica utilizada nos projetos
- **Experiência** — Histórico profissional (Studio 9 SI, Freelancer, Digital Lz)
- **Projetos** — Galeria de projetos desenvolvidos com links e descrições
- **Contato** — Formulário com validação (Zod + React Hook Form), informações de contato e redes sociais
- **Navegação** — Navbar fixa responsiva com menu mobile e scroll suave entre seções

## 🚀 Tecnologias

| Categoria | Tecnologias |
|-----------|-------------|
| **Core** | React 18, TypeScript, Vite |
| **Estilização** | Tailwind CSS, tailwindcss-animate, tailwindcss-textshadow |
| **Animações** | Motion (Framer Motion), AOS |
| **Formulário** | React Hook Form, Zod, @hookform/resolvers |
| **UI** | Radix UI, Lucide React, Phosphor Icons, React Icons |
| **Feedback** | Sonner (toasts) |
| **Outros** | Keen Slider, React Router DOM, Axios |

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/PedroDmMaia/portifolio.git

# Entre na pasta do projeto
cd portifolio

# Instale as dependências (npm, pnpm ou yarn)
npm install
# ou
pnpm install
# ou
yarn install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:5173`.

## 📜 Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o ESLint |

## 📁 Estrutura do projeto

```
src/
├── App.tsx              # Componente principal e layout
├── main.tsx             # Entry point
├── index.css            # Estilos globais
├── assets/              # Imagens e mídia
│   ├── projects/        # Imagens dos projetos
│   ├── about-image.jpg
│   └── logo.jpeg
├── components/          # Componentes React
│   ├── Hero.tsx         # Seção hero
│   ├── about.tsx        # Sobre mim
│   ├── contact.tsx      # Formulário de contato
│   ├── experience.tsx   # Experiência profissional
│   ├── navBar.tsx       # Navegação
│   ├── projects.tsx     # Galeria de projetos
│   └── technologies.tsx # Stack tecnológica
└── constants/
    └── index.ts         # Dados de projetos e experiências
```

## 🔗 Links

- [LinkedIn](https://www.linkedin.com/in/pedrodmmaia/)
- [GitHub](https://github.com/PedroDmMaia)
- [Instagram](https://www.instagram.com/pedroo._.maia/)

---

Desenvolvido com ❤️ por **Pedro Maia**
