# Currículo Digital — Francisco Gemaque

Currículo digital desenvolvido com **Next.js, React e TypeScript**, com foco em apresentação profissional, responsividade, acessibilidade e experiência do usuário.

O projeto reúne informações sobre trajetória profissional, formação acadêmica, competências técnicas e projetos de desenvolvimento de software em uma interface moderna e acessível por QR Code.

## Acesse o projeto

**Aplicação:** https://francisco-gemaque.vercel.app

**Repositório:** https://github.com/gemaquejr/curriculum_next

## Funcionalidades

- Apresentação profissional e trajetória de carreira.
- Seções de experiência, formação acadêmica, habilidades e projetos.
- Layout responsivo para dispositivos móveis, tablets e desktops.
- Alternância entre temas claro, escuro e automático (sistema).
- Persistência da preferência de tema no navegador.
- Navegação mobile com suporte a teclado.
- Recursos de acessibilidade, incluindo indicadores de foco e link para pular ao conteúdo.
- Download do currículo em PDF.
- QR Code para compartilhar o currículo digital.
- Metadados de SEO, Open Graph e Twitter Cards.
- Sitemap e configuração de robots.
- Testes automatizados de ponta a ponta com Playwright.

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| Next.js 16 | Framework e App Router |
| React 19 | Construção da interface |
| TypeScript | Tipagem estática |
| CSS Modules | Estilização dos componentes |
| Lucide React | Ícones da interface |
| Playwright | Testes automatizados E2E |
| ESLint | Análise estática de código |
| Vercel | Hospedagem e publicação |

## Executando localmente

### Pré-requisitos

- Node.js compatível com o Next.js 16
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/gemaquejr/curriculum_next.git
```

Acesse a pasta:

```bash
cd curriculum_next
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

http://localhost:3000

## Testes automatizados

O projeto utiliza Playwright para validar os principais fluxos da aplicação.

Instale o navegador necessário:

```bash
npx playwright install chromium
```

Execute a suíte completa:

```bash
npm run test:e2e
```

Execute os testes na interface interativa:

```bash
npm run test:e2e:ui
```

Abra o último relatório HTML:

```bash
npm run test:e2e:report
```

### Cobertura funcional

A suíte possui 12 testes E2E distribuídos entre:

- **Página inicial:** carregamento, seções e navegação acessível.
- **Menu mobile:** abertura, fechamento, gerenciamento de foco e navegação.
- **Temas:** seleção de tema, persistência, preferência do sistema e acessibilidade do seletor.

## Qualidade de código

Execute a análise estática:

```bash
npm run lint
```

Valide os tipos TypeScript:

```bash
npx tsc --noEmit
```

Gere o build de produção:

```bash
npm run build
```

## Estrutura do projeto

```text
curriculum_next/
├── e2e/                  # Testes E2E
├── public/               # Arquivos públicos, PDF e QR Code
├── scripts/              # Scripts auxiliares
├── src/
│   ├── app/              # Rotas e layout do Next.js
│   ├── components/       # Componentes da interface
│   ├── data/             # Dados do currículo
│   ├── lib/              # Funções auxiliares
│   └── styles/           # Estilos e tokens visuais
├── playwright.config.ts  # Configuração dos testes
└── next.config.ts        # Configuração do Next.js
```

## Compartilhamento por QR Code

O currículo digital pode ser acessado por um QR Code que direciona o visitante para a aplicação publicada.

O projeto também disponibiliza uma versão em PDF para download.

Para gerar os arquivos do QR Code:

```bash
npm run generate:qrcode
```

## Objetivo do projeto

Este projeto foi desenvolvido para apresentar minha trajetória de transição de carreira para a área de tecnologia e demonstrar, na prática, conhecimentos em desenvolvimento frontend, arquitetura de componentes, TypeScript, acessibilidade, testes automatizados e publicação de aplicações web.

## Autor

**Francisco Gemaque**

Desenvolvedor Web Full Stack

GitHub: https://github.com/gemaquejr

---

Desenvolvido com Next.js, React e TypeScript.