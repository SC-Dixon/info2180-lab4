window.onload = function(){
    var searchB = document.getElementById("searchBtn");
    var httpRequest;

    searchB.addEventListener("click", function(element)
    {
        element.preventDefault();

        httpRequest = new XMLHttpRequest();
        var url = "superheroes.php";
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url);
        httpRequest.send();
    });
    
    function doSomething() 
    {
        console.log("HERE1");
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            console.log("HERE2");
            console.log(httpRequest.status);
            if (httpRequest.status === 200) 
            {
                console.log("HERE3");
                var response = httpRequest.responseText;
                alert(response);
            }else 
            {
                console.log("HERE4");
                alert('There was a problem with the request.');
            }
        }
    }

}

        

