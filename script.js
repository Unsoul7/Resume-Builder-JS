const AddQual = () => {
    qualtag = document.getElementById("qc").innerHTML;
    document.getElementById("qc").innerHTML = qualtag + '<input type="text" class="qc-value" placeholder="Qualification">';
}

const AddWexp = () => {
    qualtag = document.getElementById("we").innerHTML;
    document.getElementById("we").innerHTML = qualtag + '<input type="text" class="we-value" placeholder="Work Experience">';
}

const generateres = () => {
    let x = document.getElementById('res1').style.display
    if (x == 'block') {
        document.getElementById('res1').style.display = 'none'
    } else {
        document.getElementById('res1').style.display = 'block'
    }

    const qc = document.getElementById("qc")
    const count = qc.children.length
    var num = 0
    while (num < count) {
        let quals = document.getElementById("r-qualification").innerHTML
        let val = document.getElementsByClassName("qc-value")[num].value
        document.getElementById("r-qualification").innerHTML = quals + "<li>"+val+"</li>"
        num++
    }

    const we = document.getElementById("we")
    const countwe = we.children.length
    var numw = 0
    while (numw <countwe) {
        let qualsw = document.getElementById("r-work-experience").innerHTML
        let valw = document.getElementsByClassName("we-value")[numw].value
        document.getElementById("r-work-experience").innerHTML = qualsw + "<li>"+valw+"</li>"
        numw++
    }

    let iuname = document.getElementById("ih").value
    let funame = document.getElementById("fh").value
    let luname = document.getElementById("lh").value
    document.getElementById("sls").innerHTML = '<li>Instagram : <a href="https://www.instagram.com/'+iuname+'" >@'+iuname+'</a></li>'
    document.getElementById("sls").innerHTML = document.getElementById("sls").innerHTML + '<li>Facebook : <a href="https://www.instagram.com/'+funame+'" >@'+funame+'</a></li>'
    document.getElementById("sls").innerHTML = document.getElementById("sls").innerHTML + '<li>Linkedin : <a href="https://www.linkedin.com/in/'+luname+'" >@'+luname+'</a></li>'

    document.getElementById("r-name").innerText = document.getElementById("name").value
    document.getElementById("r-phone").innerText = document.getElementById("phone").value
    document.getElementById("r-address").innerText = document.getElementById("address").value
    document.getElementById("r-objective").innerText = document.getElementById("obj").value

    


} 