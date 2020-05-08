// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

//the axios
axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then((response) => {
    console.log(response);
    createTabs(response.data.topics);
    // debugger;
  })
  .catch((error) => {
    console.log(error);
    // debugger;
  });

//create function over the topics array
function createTabs(topicsAttrs) {
  //bring arr list into funct
  const topics = document.querySelector(".topics");

  //for each over the entire array
  topicsAttrs.forEach((topic) => {
    //create the div for the tab ie: <div class="tab">topic here</div>

    const tab = document.createElement("div");

    //add tab class

    tab.classList.add("tab");
    //add tab content
    tab.textContent = "Topic";
    //appenchild
    topics.appendChild(tab);
  });
}
