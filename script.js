async function getEveryThird(string_to_cut) {
  try {
    let result = await fetch('http://localhost:8080/test', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ string_to_cut }),
    });
    result = await result.json();
    console.log('response', result);
    result = JSON.stringify(result);
    displayResponse(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

const displayResponse = (string) => {
  const displayDiv = document.getElementById('response');
  displayDiv.innerHTML = '';
  const text = document.createElement('h2');
  text.innerHTML = 'Response: ' + string;
  displayDiv.appendChild(text);
}

window.onload = () => {
  document
    .getElementById('button')
    .addEventListener('click', () =>
      getEveryThird(document.getElementById('input').value)
    );
};

// module.exports = getEveryThird;
