![Curso de Node.js](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)
# Curso de Node.js

Curso para aprender **Node.js** desde cero.

## Videos de las clases
- Clase 1: [Introdcción a Node.js y módulos](https://www.youtube.com/watch?v=yB4n_K7dZV8)
- Clase 2: [Desarrollando una API con Express desde cero](https://www.youtube.com/watch?v=YmZE1HXjpd4)
- Clase 3: [SOLUCIÓN de CORS y Desarrollo de API REST con Express](https://www.youtube.com/watch?v=-9d3KhCqOtU)

## Configurations

### Config linter

1. Install [Standard](https://github.com/standard/standard)
    ```bash
    npm install standard -D
    ```

2. Add to `packajes.json`
    ```json
    "eslintConfig": {
      "extends": "standard"
    }
    ```

3. Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

4. Add to `settings.json`
    ```json
    "[javascript]": {
      "editor.formatOnSave": true
    },
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
    ```
5. Additionally, to highligh errors install [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) extension

    _**Note**: To avoid invasive error messages, add `"errorLens.followCursor": "activeLine"` to `settings.json` to display the error only on the active line._

### Using nodemon

1. Install [nodemon](https://github.com/remy/nodemon)
    ```bash
    npm install nodemon -D
    ```

2. Add to `packajes.json`
    ```json
    "scripts": {
      "dev": "nodemon [your_js_file_name.js]"
    }
    ```

### Behind a corporate proxy?

Disable (and then renable) strict mode to install npm packages:

  ```bash
  npm set strict-ssl false
  ```

## Continue...

Clase 4