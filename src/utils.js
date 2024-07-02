export function toggleimg(pathname){
   
    const classes = document.querySelector('body').classList.values()
    for (const value of classes) {
        document.querySelector('body').classList.remove(value)
      }
    document.querySelector('body').classList.add(pathname.split('/')[1])
}