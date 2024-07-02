import { toggleimg } from "./utils.js"

export class Router {
    routes = {

    }
    add(path,adress){
        this.routes[path] = adress
    }
    route(event){
        event = event || window.event
        event.preventDefault()
        

        
       window.history.pushState({},'',event.target.href)
       this.handler()
        
    }
    handler(){
       
    const {pathname} = window.location
   
    const route = this.routes[pathname] || this.routes['/e404']
   
   fetch(route).
    then(data => data.text())
    .then(html =>{ console.log(html)
        
        document.querySelector('#app').innerHTML = html
        if(route == this.routes['/e404']){
            toggleimg('/e404')
            return
        }
        toggleimg(pathname)
      
    })
    
    

    }


    
}