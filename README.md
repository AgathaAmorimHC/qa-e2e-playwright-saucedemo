
#  Automação E2E com Playwright - SauceDemo

##  Descrição
Este projeto contém testes automatizados de ponta a ponta (**E2E**) utilizando o framework **Playwright com JavaScript**.  
Os testes simulam interações na aplicação [SauceDemo](https://www.saucedemo.com/), como login, adição de produtos no carrinho e fluxo de compra.

---

##  Tecnologias utilizadas
- Node.js
- Playwright
- JavaScript
- Git & GitHub
- Visual Studio Code

---

## 📂 Estrutura dos testes
```
tests/
├── busca/
│   └── adicionar-produto.spec.js
├── carrinho/
│   └── home.spec.js
└── login/
    ├── erro-intencional.spec.js
    ├── login-invalido.spec.js
    ├── login-positivo.spec.js
```

---

##  Pré-requisitos
- Node.js versão 18 ou superior
- Git instalado
- Navegador atualizado
- Visual Studio Code ou outro editor de sua preferência

---

##  Instalação e execução

### 1️⃣ Clone este repositório:
```bash
git clone https://github.com/AgathaAmorimHC/qa-e2e-playwright-saucedemo.git
```

### 2️⃣ Acesse a pasta do projeto:
```bash
cd qa-e2e-playwright-saucedemo
```

### 3️⃣ Instale as dependências:
```bash
npm install
```

### 4️⃣ Execute todos os testes:
```bash
npx playwright test
```

### 5️⃣ Execute um teste específico:
```bash
npx playwright test tests/login/login-positivo.spec.js
```

### 6️⃣ Gere e visualize o relatório:
```bash
npx playwright show-report
```

---

##  Melhorias futuras
- [ ] Implementar relatórios avançados (Allure Report)
- [ ] Adicionar execução cross-browser (Chrome, Firefox e Safari)
- [ ] Configurar pipeline de integração contínua (GitHub Actions)
- [ ] Ampliar cobertura de testes com cenários de erro e borda
- [ ] Implementar testes de API para complementar os testes E2E

---

##  Licença
Este projeto está sob a licença MIT.
