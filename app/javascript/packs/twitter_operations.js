function handle_twitter_ajax(event)
{
  const readMissingPersonResultsDiv = document.getElementById('read_missing_person_results_div');
  console.log('DOM fully loaded and parsed');
  // Header
  const authHeader = localStorage.getItem("authHeader");
  // Twitter API divs
  const twitterOperationsDiv = document.getElementById('twitter_operations_div');
  const twitterResultsDiv = document.getElementById('twitter_results_div');
  const twitterApiWord = document.getElementById('twitter_api_word');
  const twitterApiButton = document.getElementById('twitter_api_button');
  const twitterCreateMissingNameButton = document.getElementById('twitter_create_missing_name_button')
  const twitterMenu = document.getElementById('twitter_menu');
  // Paths
  const missingPeoplePath = 'http://localhost:3001/api/v1/missing_persons';
  const twitterPath = 'http://localhost:3001/api/v1/twitter';
  // Twitter operations
  twitterOperationsDiv.addEventListener('click', async (event) =>
  {
    if(event.target === twitterApiButton)
    {
      fetch(twitterPath,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': authHeader
          }
        }
      )
      .then(
        function(twitterApiResponseData){
          return twitterApiResponseData.json();//json.data
        }
      )
      .then(
        function(twitterApiResponseData)
        {
          console.log(twitterApiResponseData);
          // HTML TABLE
          var twitterEntry = twitterApiWord.value
          let text = "<table>"
          for (let x in twitterApiResponseData.data)
              if (twitterEntry === 'all')

          //for (let x in twitterApiResponseData.items[x].subjects)
              //if (twitterApiResponseData.items[x].subjects[s] === 'Kidnappings and Missing Persons' ||
                  //twitterApiResponseData.items[x].subjects[s] === 'ViCAP Missing Persons' )

          {
            text += "<tr>";
            text += "<td>" +
            twitterApiResponseData.data[x].id + "</td>";
            text += "<td>" +
            twitterApiResponseData.data[x].text + "</td></tr>";
          }
          else if (twitterEntry === 'id')
          {
            text += "<tr>";
            text += "<td>" +
            twitterApiResponseData.data[x].id + "</td></tr>";
          }
          else if (twitterEntry === 'text')
          {
            text += "<tr>";
            text += "<td></td>";
            text += "<td>" +
            twitterApiResponseData.data[x].text + "</td></tr>";
          }
          text += "</table>"
          twitterResultsDiv.innerHTML = text;
        }
      )
    }// end else if
  });// end twitterOperationsDiv
}// function handle twitter ajax
document.addEventListener('DOMContentLoaded', handle_twitter_ajax(event));
// :)
