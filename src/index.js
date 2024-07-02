import { Router } from "./routes.js";

const route = new Router()


route.add("/home", "./pages/home.html")
route.add("/universe", "./pages/universe.html")
route.add("/explorer", "./pages/explorer.html")
route.add("/e404", "./pages/notFound.html")

window.history.replaceState('/','','/home')

window.onpopstate = () => route.handler()
route.handler()
window.route = ()=> route.route()