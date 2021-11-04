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

    async function submitFunc(e) {
        e.preventDefault();
        const form = document.getElementById('form1');
        //const topic = form.elements['topic'];
        //console.log(topic.value);

        //const output = document.querySelector('#output');
        //outputId.innerText = topic.value

        // const outputPub = document.querySelector('#outputPub');
        // outputPub.innerText = "December"

        axios.get('http://localhost:8080/selectAll').then(function (response) {
            // handle success
            console.log(response.data);
            console.log(Object.keys(response.data).length);
            output.innerText = ""
            for (let i = 0; i < Object.keys(response.data).length; i++) {
                output.innerText += "Article ID: " + response.data[i].article_id +
                    " + Source ID: " + response.data[i].source_id +
                    "\n Pub Date: " + response.data[i].pub_date +
                    "\n Title: " + response.data[i].title +
                    " + URL: " + response.data[i].url + "\n\n";
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

<main>
    <h1>Split</h1>

    <form id="form1" path="post">
        <div class="row"><input class="place-holder-center" type="text" id="aID" placeholder="Enter Article ID"></div>
        <div class="row"><input class="place-holder-center" type="text" id="sID" placeholder="Enter Source ID"></div>
        <div class="row"><input class="place-holder-center" type="text" id="tID" placeholder="Enter Topic ID"></div>
        <div class="row"><input class="place-holder-center" type="text" id="title" placeholder="Enter Title"></div>
        <div class="row"><input class="place-holder-center" type="text" id="url" placeholder="Enter URL"></div>
        <div class="row"><input type="submit" value="Enter Article" id="t" class="full" on:click={insertFunc}></div>
        <div class="row"><input type="submit" value="Display Articles" id="s" class="full" on:click={submitFunc}></div>
        <div class="row"><input class="place-holder-center" type="text" id="aID2" placeholder="Enter Article ID to Delete"></div>
        <div class="row"><input type="submit" value="Delete Article" id="d" class="full" on:click={deleteFunc}></div>
    </form>

    <h2 id="output"></h2>
</main>

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