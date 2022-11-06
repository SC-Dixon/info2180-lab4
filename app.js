$(document).ready(function() {
    var searchB = $('#searchBtn');
    

    searchB.on('click', function() {
        var tquery = $('#search').val();
        document.querySelector("#result").removeAttribute("class");
        

        $.ajax({
            url:'superheroes.php?query='+tquery,
            method: "POST",
            data:{query:tquery},
            dataType: 'json'
        }).done(function(response) {

            var sQuery = response.query;
            var superheroes = response.superheroes;

                function blankFunction(item){
                    var ulCh = document.querySelector('#result ul');
                    var liCh = document.createElement("li")
                    liCh.innerHTML = `${item['alias']}`;
                    ulCh.appendChild(liCh);
                }

                function searchFunction(item){
                    if(item['name'].toUpperCase() === sQuery.toUpperCase() || item['alias'].toUpperCase() === sQuery.toUpperCase()){
                        var resultDiv = document.querySelector("#result")
                        resultDiv.classList.add("sFound");
                        document.querySelector("#result.sFound").innerHTML = '<h3></h3>';
                        var h3Ch = document.querySelector("#result.sFound h3");
                        h3Ch.innerHTML = `${item['alias']}`.toUpperCase();
                        var h4Ch = document.createElement("h4");
                        h4Ch.innerHTML = `A.K.A. ${item['name']}`.toUpperCase();
                        resultDiv.appendChild(h4Ch);
                        var pCh = document.createElement("p");
                        pCh.innerHTML = `${item['biography']}`;
                        resultDiv.appendChild(pCh);
                        check = 1;
                        return;

                    }
                }

            if(sQuery === ""){
                document.querySelector("#result").classList.add("blankspace");
                document.querySelector("#result.blankspace").innerHTML = '<ul></ul>';
                superheroes.forEach(blankFunction);
                
            }

            if(sQuery !== ""){
                var check = 0;
                response.superheroes.forEach(searchFunction);
                if (check === 0){
                    document.querySelector("#result").classList.add("notFound");
                    document.querySelector("#result.notFound").innerHTML = 'SUPERHERO NOT FOUND';
                }
        }

            
            

        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});