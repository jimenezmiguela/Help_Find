function handle_newsdata_ajax(event)
{
  // const readMissingPersonResultsDiv = document.getElementById('read_missing_person_results_div');
  console.log('DOM fully loaded and parsed');
  // Header
  const authHeader = localStorage.getItem("authHeader");
  // Twitter API divs
  const newsdataOperationsDiv = document.getElementById('newsdata_operations_div');
  const newsdataResultsDiv = document.getElementById('newsdata_results_div');
  const newsdataApiWord = document.getElementById('newsdata_api_word');
  const newsdataApiButton = document.getElementById('newsdata_api_button');
  const newsdataCreateMissingNameButton = document.getElementById('newsdata_create_missing_name_button')
  const newsdataMenu = document.getElementById('newsdata_menu');
  const body = document.getElementById('body');
  const backend = body.getAttribute('data-backend');

  // Paths
  // const missingPeoplePath = 'https://help-find-back.herokuapp.com/api/v1/missing_persons';
  //const newsdataPath = 'https://help-find-back.herokuapp.com/api/v1/newsdata';
  const missingPeoplePath = backend + "/api/v1/missing_persons";
  const newsdataPath = backend + "/api/v1/newsdata";
  // Twitter operations
  newsdataOperationsDiv.addEventListener('click', async (event) =>
  {
    // API'S
    // Newsdata API
    if (event.target === newsdataApiButton)
    {
      fetch(newsdataPath)
      .then
      (
        function(newsdataApiResponse)
        {
          return newsdataApiResponse.json();
        }
      )
      .then
      (
        function(newsdataApiResponseData)
        {
          console.log(newsdataApiResponseData);
          // HTML TABLE
          var newsdataEntry = newsdata_api_word.value
          let text = "<table>"
          for (let x in newsdataApiResponseData.results)
          {
            if (newsdataEntry === 'all')
            {
              text += "<tr>";
              text += "<td>" +
              newsdataApiResponseData.results[x].title + "</td>";
              text += "<td>" +
              newsdataApiResponseData.results[x].link + "</td>";
              text += "<td>" +
              newsdataApiResponseData.results[x].description + "</td></tr>";
            }
            else if (newsdataEntry === 'title')
            {
              text += "<tr>";
              text += "<td>" +
              newsdataApiResponseData.results[x].title + "</td>";
              text += "<td></td>";
              text += "<td></td></tr>";
            }
            else if (newsdataEntry === 'link')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td>" +
              newsdataApiResponseData.results[x].link + "</td>";
              text += "<td>";
              text += "</td></tr>";
            }
            else if (newsdataEntry === 'description')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              newsdataApiResponseData.results[x].description + "</td></tr>";
            }
          }
          text += "</table>"
          newsdataResultsDiv.innerHTML = text;
        }
      )// end .then
    } // end else if
  });// end newsdataOperationsDiv
}// function handle newsdata ajax
document.addEventListener('DOMContentLoaded', handle_newsdata_ajax(event));
// :)
