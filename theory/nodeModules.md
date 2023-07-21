# Node modules

* `What is:` In a JavaScript project, the node_modules folder serves as a storage location for all project dependencies. Dependencies are JavaScript code packages that your project uses to add specific functionalities or to reuse existing code.

* When you create a JavaScript project and want to utilize external libraries or packages (such as third-party tools, frameworks, utilities, etc.), you need to install them in your project. These dependencies are stored in the node_modules folder, which is created when you run the package installation command (e.g., npm install).

* Key points about the node_modules folder:
1. `Dependency Storage:` The node_modules folder contains various sub-folders, each representing a specific package or dependency. Each package is installed individually, with its own folders and files.
2. `Version Control:` Each installed package has version information listed in the project's package.json file, enabling you to control specific versions used in your project.
3. `Package Manager:` The Node.js package manager (e.g., npm or yarn) is responsible for installing and managing the dependencies listed in your project's package.json file. When you run npm install or yarn install, the package manager reads the information from package.json, downloads the required dependencies from the internet, and stores them in the node_modules folder.
4. `Gitignore:` Typically, the node_modules folder is included in the project's .gitignore file. This means it is not tracked by version control systems (e.g., Git) since the files within it are generated automatically and can be obtained again by running the package installation command.

* By using third-party packages, node_modules simplifies the organization and management of dependencies, allowing developers to share their projects without including the actual packages in their repositories. This saves space and avoids version conflicts, as each developer can install the required dependencies on their local machine using the package manager.