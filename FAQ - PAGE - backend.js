function exibir(obj,txt){
    var view = document.getElementById(obj);
    var texto = document.getElementById(txt);
    if(view.style.display == 'block'){
        view.style.display = 'none';
        texto.style.color = "hsl(240, 6%, 50%)";
        texto.style.fontWeight = '400';
    }else{
        view.style.display = 'block';
        texto.style.color = "hsl(240, 80%, 10%)";
        texto.style.fontWeight = '700';
    }
   
}