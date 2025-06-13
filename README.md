<p align="center">
  <img src="assets/banner.png" alt="Banner do Projeto" />
</p>

<h1 align="center">Automação de Testes E2E com Playwright – SauceDemo</h1>

<p align="center">
  <a href="https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo">
    <img alt="Repo Size" src="https://img.shields.io/github/repo-size/AgathaAmorimHC/qa-e2e-playwright-saucedemo" />
  </a>
  <a href="https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/AgathaAmorimHC/qa-e2e-playwright-saucedemo" />
  </a>
  <a href="https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/AgathaAmorimHC/qa-e2e-playwright-saucedemo" />
  </a>
  <a href="https://www.linkedin.com/in/agathasiqueiradeamorim/" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Agatha%20Amorim-0077B5?style=flat&logo=linkedin" />
  </a>
  <a href="https://github.com/AgathaAmorimHC" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-AgathaAmorimHC-black?style=flat&logo=github" />
  </a>
</p>

---

## Sobre o Projeto

Automação de testes End-to-End (E2E) utilizando **Playwright** com **JavaScript**, voltada à validação dos principais fluxos da aplicação **SauceDemo**, uma plataforma simulada de e-commerce. 

O projeto simula situações reais do usuário desde login até finalização da compra, buscando antecipar falhas críticas com testes robustos, reutilizáveis e fáceis de manter.

> “Este projeto reforça minha capacidade de aplicar boas práticas em automação, com foco em confiabilidade, manutenção e empatia pelo comportamento real do usuário final.”

---

## Tecnologias & Ferramentas

- **Linguagem:** JavaScript ES6+
- **Framework:** Playwright
- **Ambiente:** Node.js + VSCode
- **Versionamento:** Git & GitHub
- **Execução de testes:** CLI + UI Playwright
- **Relatórios:** HTML gerado automaticamente
- **Evidências:** Prints, vídeos e logs
- **Pipelines (planejado):** GitHub Actions
- **Relatórios avançados (planejado):** Allure

---

## O que foi testado

- Login com dados válidos e inválidos
- Logout funcional
- Adição/remoção de produtos no carrinho
- Finalização do pedido (checkout)
- Ordenação de produtos
- Testes negativos para validação robusta

---

## Decisões Técnicas

- **Playwright** foi escolhido por sua velocidade, suporte nativo a múltiplos browsers e geração automática de evidências.
- Os testes foram separados por fluxo para garantir rastreabilidade e leitura intuitiva.
- A massa de dados (usuários) foi externalizada em arquivos JSON para facilitar manutenção.
- Os testes seguem uma estrutura escalável com foco em manutenção futura.

---

## Estrutura do Projeto

```bash
qa-e2e-playwright-saucedemo
├── assets                 # Imagens e GIFs de execução
├── fixtures               # Massa de dados (usuários simulados)
│   └── users.json
├── tests                  # Casos de teste organizados por fluxo
│   ├── login
│   ├── logout
│   ├── carrinho
│   ├── checkout
│   ├── ordenacao
│   └── busca
├── playwright.config.js   # Configurações globais do Playwright
├── package.json
└── README.md
```

---

## Como Executar Localmente

### Pré-requisitos

- Node.js instalado (v16+)
- Git instalado

### Instalação

```bash
git clone https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo.git
cd qa-e2e-playwright-saucedemo
npm install
npx playwright install
```

---

## Como Executar os Testes

### Executar todos os testes

```bash
npx playwright test
```

### Executar testes por pasta

```bash
npx playwright test tests/login
```

### Executar arquivo específico

```bash
npx playwright test tests/checkout/checkout-completo.spec.js
```

### Usar interface interativa

```bash
npx playwright test --ui
```

---

## Geração de Relatórios

```bash
npx playwright show-report
```

---

## Evidências da Automação

### Execução Completa

![Execução Completa](./assets/background-testes.gif)

---

### Testes Bem-Sucedidos

![Execução Sucesso](./assets/execucao-sucesso.gif)

---

### Falha Intencional (Teste Negativo)

![Execução Falha](./assets/execucao-falha.gif)

---

## Diferenciais Técnicos

- Arquitetura modular com foco em escalabilidade
- Separação clara entre lógica de teste e massa de dados
- Testes negativos planejados para garantir robustez
- Relatórios automatizados para rastreabilidade
- Preparado para CI/CD e relatórios avançados no futuro

---

## Próximos Passos

- [ ] Refatoração completa para padrão Page Object Model (POM)
- [ ] Testes responsivos (mobile/tablet)
- [ ] Integração com API simulada
- [ ] Configuração de pipeline com GitHub Actions
- [ ] Implementação do Allure Reports
- [ ] Execução paralela em múltiplos browsers

---

## Contato

**Agatha Amorim**  
[LinkedIn](https://www.linkedin.com/in/agathasiqueiradeamorim/) | [GitHub](https://github.com/AgathaAmorimHC)

> "Mais que testar, entrego qualidade. Cada automação reflete compromisso técnico e estratégico, assegurando processos seguros, escaláveis e eficientes."