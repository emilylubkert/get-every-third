 async function getEveryThird(string_to_cut) {
    try {
        await fetch("http://localhost:8080/test", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ string_to_cut }),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('response', response);
                displayResponse(JSON.stringify(response));
                return response;
            })
    } catch (error) {
        console.log(error)
    }
}

function displayResponse(string) {
    const displayDiv = document.getElementById('response');
    displayDiv.innerHTML = "";
    const text = document.createElement('h2');
    text.innerHTML = 'Response: ' + string;
    displayDiv.appendChild(text);
}

//test cases - uncomment lines 30, 32, 34 (1 at a time) or copy/paste to console to see successful test cases
const testString = 'abc'
// getEveryThird(testString);
const really_long_string = testString.repeat(1000)
// getEveryThird(really_long_string);
const shortString = 'ab'
// getEveryThird(shortString);