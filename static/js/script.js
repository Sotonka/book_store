const requestURL = 'http://127.0.0.1:8000/book/'

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.text()
    })
}

function sendRequest2(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': token
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.text()
    })
}

window.onload=function(){
    document.getElementById("btn1").addEventListener('click',function ()
        {
            sendRequest('GET', requestURL).then(data => document.getElementById("data").value = data)
        });

    document.getElementById("btn2").addEventListener('click',function ()
        {
            sendRequest('GET', requestURL+'?price=999').then(data => document.getElementById("data").value = data)
        });
    document.getElementById("btn3").addEventListener('click',function ()
        {
            sendRequest('GET', requestURL+'?search=' + document.getElementById("inp").value).then(data => document.getElementById("data").value = data)
        });
    document.getElementById("btn4").addEventListener('click',function ()
        {
            sendRequest('GET', requestURL+'?ordering=-price').then(data => document.getElementById("data").value = data)
        });
    document.getElementById("btn5").addEventListener('click',function ()
        {
            let body = {
                "name": document.getElementById("nm").value,
                "price": document.getElementById("pr").value,
                "author_name": document.getElementById("au").value,
            }
            sendRequest2('POST', requestURL, body).then(data => document.getElementById("data").value = data)
        });
}







