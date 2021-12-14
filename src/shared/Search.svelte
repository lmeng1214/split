<script>
    import axios from "axios";

    //axios.defaults.baseURL = '127.0.0.1:8080';
    // axios.defaults.headers.common = {
    //     "Content-Type": "application/json"
    // }

    async function deleteFunc(e) {
        e.preventDefault();
        const form = document.getElementById('form1');

        const aID = form.elements['aID2'];
        console.log(aID.value);

        axios.post('http://localhost:8080/deleteArticle/', {
            article_id: aID.value,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        aID.value = '';
    }

    async function insertUser(e) {
        e.preventDefault();
        const form = document.getElementById('form2');

        const uID = form.elements['uID'];
        console.log(uID.value);

        axios.post('http://localhost:8080/insertUser/', {
            account_id: uID.value,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                const url = new URL(window.location.href);
                url.searchParams.set('uID', uID.value);
                window.history.pushState({ path: url.href }, '', url.href);
            });

        //uID.value = '';
    }

    async function getUser(e) {
        e.preventDefault();
        const form = document.getElementById('form2');

        const uID2 = form.elements['uID2'];
        console.log(uID2.value);
        console.log("check")

        axios.post('http://localhost:8080/getUser/', {
            account_id: uID2.value,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                const url = new URL(window.location.href);
                url.searchParams.set('uID', uID2.value);
                window.history.pushState({ path: url.href }, '', url.href);
            });

        //uID.value = '';
    }

    async function insertFunc(e) {
        e.preventDefault();
        const form = document.getElementById('form1');

        const aID = form.elements['aID'];
        console.log(aID.value);

        const sID = form.elements['sID'];
        console.log(sID.value);

        const tID = form.elements['tID'];
        console.log(tID.value);

        const title = form.elements['title'];
        console.log(title.value);

        const url = form.elements['url'];
        console.log(url.value);

        axios.post('http://localhost:8080/insertArticle/', {
            article_id: aID.value,
            source_id: sID.value,
            topic_id: tID.value,
            title: title.value,
            url: url.value,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        aID.value = '';
        sID.value = '';
        tID.value = '';
        title.value = '';
        url.value = '';
    }

    async function starFunc(args) {
        let button = document.getElementById(args);
        //console.log(button)

        const aID = button.id
        console.log(aID)

        const urlParams = new URLSearchParams(window.location.search);
        const uID = urlParams.get('uID');
        console.log(uID);

        axios.post('http://localhost:8080/updateFavorite/', {
            article_id: aID,
            account_id: uID
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            // handle success
            console.log(response);
            if(response.data == "Inserted") {
                button.innerText = "Delete Fav?"
            } else {
                button.innerText = "Add Fav?"
            }
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    async function submitFunc(e) {
        e.preventDefault();
        const form = document.getElementById('form1');
        //const topic = form.elements['topic'];
        //console.log(topic.value);

        //const output = document.querySelector('#output');
        //outputId.innerText = topic.value

        // const outputPub = document.querySelector('#outputPub');
        // outputPub.innerText = "December"

        axios.get('http://localhost:8080/').then(function (response) {
            // handle success
            console.log(response.data);
            console.log(Object.keys(response.data).length);
            const elem = document.getElementById("output")
            elem.innerText = ""
            for (let i = 0; i < Object.keys(response.data).length; i++) {
                var node = document.createElement("H2");
                node.innerText = "Article ID: " + response.data[i].article_id +
                    " + Source ID: " + response.data[i].source_id +
                    " + Topic ID: " + response.data[i].topic_id +
                    "\n Pub Date: " + response.data[i].pub_date +
                    "\n Title: " + response.data[i].title +
                    " + URL: " + response.data[i].url + "\n\n";
                elem.appendChild(node);
                var btn = document.createElement("BUTTON");
                btn.innerText = "STAR"
                btn.setAttribute("style","background-color:yellow");
                btn.setAttribute("id", response.data[i].article_id.toString());
                //btn.setAttribute("name", i.toString());
                //btn.setAttribute('onclick', "return starFunc(this.id);");
                btn.addEventListener('click', function() {
                   // console.log(this.id);
                    //console.log(this.name);
                    starFunc(this.id);
                }, false);
                elem.appendChild(btn);
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

        //topic.value = '';
    }

    async function searchFunc(e) {
        e.preventDefault();
        const form = document.getElementById('form3');

        const sDropdown = form.elements['sA'];
        console.log(sDropdown.value);

        const sDropdown2 = form.elements['sO'];
        console.log(sDropdown2.value);

        let nameVal
        if(sDropdown.value == "Source ID") nameVal = "source_id"
        else if(sDropdown.value == "Topic ID") nameVal = "topic_id"
        console.log(nameVal)

        let sortOrder
        if(sDropdown2.value == "Desc") sortOrder = "desc"
        else sortOrder = "asc"
        console.log(sortOrder)

        axios.post('http://localhost:8080/search', {
            name: nameVal,
            order: sortOrder
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log(response.data);
            console.log(Object.keys(response.data).length);
            const elem = document.getElementById("output")
            elem.innerText = ""
            for (let i = 0; i < Object.keys(response.data).length; i++) {
                var node = document.createElement("H2");
                node.innerText = "Article ID: " + response.data[i].article_id +
                    " + Source ID: " + response.data[i].source_id +
                    " + Topic ID: " + response.data[i].topic_id +
                    "\n Pub Date: " + response.data[i].pub_date +
                    "\n Title: " + response.data[i].title +
                    " + URL: " + response.data[i].url + "\n\n";
                elem.appendChild(node);
            }
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        //topic.value = '';
    }
</script>

<h1>Split1</h1>

<form id="form2" path="post2">
    <div class="row"><input class="place-holder-center" type="text" id="uID" placeholder="New User?"></div>
    <div class="row"><input type="submit" value="Submit New User" id="l" class="full" on:click={insertUser}></div>
    <div class="row"><input class="place-holder-center" type="text" id="uID2" placeholder="Returning User?"></div>
    <div class="row"><input type="submit" value="Submit Returning User" id="l2" class="full" on:click={getUser}></div>
</form>

<form id="form1" path="post">
    <div class="row"><input class="place-holder-center" type="text" id="aID" placeholder="Enter Article ID"></div>
    <div class="row"><input class="place-holder-center" type="text" id="sID" placeholder="Enter Source ID"></div>
    <div class="row"><input class="place-holder-center" type="text" id="tID" placeholder="Enter Topic ID"></div>
    <div class="row"><input class="place-holder-center" type="text" id="title" placeholder="Enter Title"></div>
    <div class="row"><input class="place-holder-center" type="text" id="url" placeholder="Enter URL"></div>
    <div class="row"><input type="submit" value="Enter Article" id="t" class="full" on:click={insertFunc}></div>
    <div class="row"><input type="submit" value="Display All Articles" id="s" class="full" on:click={submitFunc}></div>
    <div class="row"><input class="place-holder-center" type="text" id="aID2" placeholder="Enter Article ID to Delete"></div>
    <div class="row"><input type="submit" value="Delete Article" id="d" class="full" on:click={deleteFunc}></div>
</form>

<form id="form3" path="post">
    <div class="row">
        <select class="place-holder-center" name="aSearch" id="sA">
            <option value="Source ID">Source ID</option>
            <option value="Topic ID">Topic ID</option>
        </select>
        <select class="place-holder-center" name="aOrder" id="sO">
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
        </select>
    </div>
    <div class="row"><input type="submit" value="Display Sorted Articles" id="dA" class="full" on:click={searchFunc}></div>
</form>

<div id="output"></div>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    input {
        margin-bottom: 20px;
        width: 50%;
    }

    .place-holder-center::placeholder {
        text-align: center;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    #topic {
        background-image: url('https://www.w3schools.com/css/searchicon.png'); /* Add a search icon to input */
        background-position: 10px 12px; /* Position the search icon */
        background-repeat: no-repeat; /* Do not repeat the icon image */
        width: 100%; /* Full-width */
        font-size: 16px; /* Increase font-size */
        padding: 12px 20px 12px 40px; /* Add some padding */
        border: 1px solid #ddd; /* Add a grey border */
        margin-bottom: 12px; /* Add some space below the input */
    }
</style>