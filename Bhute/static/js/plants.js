function search() {
    var filter= document.getElementById('myinput').value.toUpperCase();
    var ul = document.getElementById('ul');
    var li =ul.getElementsByTagName('li');
    for(var i = 0; i < li.length; i++){
        var a = li[i].getElementsByTagName('a')[0];

        var textvalue = a.textContent.toUpperCase() ;

        if(textvalue.indexOf(filter) > -1){
            li[i].style.display="";
        }else{
            li[i].style.display="none";
            var sorry = document.getElementById('p').innerHTML="Sorry No More Results For Your Search . . .   ";
            document.getElementById('mog').style.display="block";

        }
    }
}
