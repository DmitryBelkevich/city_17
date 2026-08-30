function main() {
  const frontController = new FrontController();
  frontController.dispatch("/song");
}

const app = main();
