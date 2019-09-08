// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tab = document.querySelector('.topics');

function tabCreator(topic){
    const topicsDiv = document.createElement('div');

    topicsDiv.classList.add('topics');

    topicsDiv.textContent = `${topic}, `;

    tab.append(topicsDiv);

    return topicsDiv;
}




axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(item => {
            const newTopic = tabCreator(item);
            tab.append(newTopic);
            console.log(newTopic);
        });
    })
    .catch(error => {
        alert("There was a problem in retrieving data from the server.", error);
    });