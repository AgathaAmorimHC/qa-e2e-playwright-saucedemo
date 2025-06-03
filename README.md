<p align="center">
  <img src="assets/banner.png" alt="Banner do Projeto" />
</p>

<h1 align="center">Automação de Testes E2E com Playwright – SauceDemo</h1>

<p align="center">
  <a href="https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/AgathaAmorimHC/qa-e2e-playwright-saucedemo" />
  </a>
  <a href="https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/AgathaAmorimHC/qa-e2e-playwright-saucedemo" />
  </a>
  <a href="https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/AgathaAmorimHC/qa-e2e-playwright-saucedemo" />
  </a>
  <a href="https://www.linkedin.com/in/agathasiqueiradeamorim/" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/AgathaAmorimHC" target="_blank">
    <img alt="GitHub followers" src="https://img.shields.io/github/followers/AgathaAmorimHC?style=social" />
  </a>
  <a href="https://www.codefactor.io/repository/github/agathaamorimhc/qa-e2e-playwright-saucedemo" target="_blank">
    <img alt="Code Quality" src="https://www.codefactor.io/repository/github/agathaamorimhc/qa-e2e-playwright-saucedemo/badge" />
  </a>
</p>

---

## Sobre o Projeto

Automação de testes End-to-End (E2E) utilizando **Playwright** em **JavaScript**, focada em validar os fluxos críticos da aplicação web **SauceDemo** — uma plataforma de e-commerce para prática de testes.

Este projeto demonstra habilidades sólidas em automação para garantir a qualidade, estabilidade e performance dos principais processos do sistema, incluindo login, gerenciamento de carrinho, checkout e ordenação de produtos.

---

## Tecnologias e Ferramentas

- Playwright
- Node.js
- JavaScript (ES6+)
- Visual Studio Code
- Git & GitHub

---

## Objetivos dos Testes

- Validar login com credenciais válidas e inválidas
- Garantir funcionamento correto do logout
- Testar adição e remoção de itens no carrinho
- Validar fluxo completo de checkout
- Verificar ordenação dos produtos na interface
- Implementar testes negativos para validação robusta

---

## Estrutura do Projeto

```bash
projeto-qa-automacao
├── assets                 # Imagens e banners
├── fixtures               # Massa de dados (usuários)
│   └── users.json
├── tests                  # Casos de teste organizados por funcionalidade
│   ├── busca
│   ├── carrinho
│   ├── checkout
│   ├── login
│   ├── logout
│   └── ordenacao
├── package.json
├── playwright.config.js
└── README.md
```

---

## Como Executar Localmente

### Pré-requisitos

- Node.js instalado (versão 16+ recomendada)
- Git instalado

### Passos

```bash
git clone https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo.git
cd qa-e2e-playwright-saucedemo
npm install
npx playwright install
```

---

## Como Executar os Testes

Executar todos os testes:

```bash
npx playwright test
```

Executar testes de uma pasta específica:

```bash
npx playwright test tests/login
```

Executar um arquivo específico:

```bash
npx playwright test tests/checkout/checkout-completo.spec.js
```

Executar testes com interface gráfica:

```bash
npx playwright test --ui
```

---

## Relatórios de Teste

Gerar e visualizar relatório HTML interativo:

```bash
npx playwright show-report
```

---

## Evidências da Automação

### Execução Completa da Suíte

![Execução Completa](./assets/background-testes.gif)

---

### Testes Bem-Sucedidos

![Execução Sucesso](./assets/execucao-sucesso.gif)

---

### Falha Intencional para Validação

![Execução Falha](./assets/execucao-falha.gif)

---

## Diferenciais Técnicos

- Organização modular para escalabilidade e manutenção
- Massa de dados externa via JSON para flexibilidade
- Testes negativos estratégicos para robustez
- Relatórios automáticos para transparência e análise
- Preparação para integração com pipelines CI/CD

---

## Próximos Passos

- Implementar padrão Page Object Model (POM)
- Adicionar testes responsivos (mobile/tablet/web)
- Incluir testes de API para cobertura backend
- Configurar CI/CD com GitHub Actions
- Adotar relatórios avançados como Allure
- Habilitar execução paralela em múltiplos navegadores

---

## Contato

**Agatha Amorim**  🐞
[LinkedIn](https://www.linkedin.com/in/agathasiqueiradeamorim/) | [GitHub](https://github.com/AgathaAmorimHC)

---

> Mais que testar, entrego qualidade.  
> Cada automação reflete compromisso técnico e estratégico, assegurando processos seguros, escaláveis e eficientes.  
> Qualidade não é requisito, é cultura.

