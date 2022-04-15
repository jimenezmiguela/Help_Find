function handle_fbi_ajax(event)
{
  const readMissingPersonResultsDiv = document.getElementById('read_missing_person_results_div');
  console.log('DOM fully loaded and parsed');
  // Headers
  const authHeader = localStorage.getItem("authHeader");
  // API divs
  const fbiOperationsDiv = document.getElementById('fbi_operations_div');
  const fbiResultsDiv = document.getElementById('fbi_results_div');
  const fbiApiWord = document.getElementById('fbi_api_word');
  const fbiApiButton = document.getElementById('fbi_api_button');
  const fbiCreateMissingNameButton = document.getElementById('fbi_create_missing_name_button')
  const fbiMenu = document.getElementById('fbi_menu');
  // Paths
  const missingPeoplePath = 'http://localhost:3001/api/v1/missing_persons';
  const fbiPath = 'http://localhost:3001/api/v1/fbi';
  // FBI operations
  fbiOperationsDiv.addEventListener('click', async (event) =>
  {
    if (event.target === fbiApiButton)
    {
      fetch(fbiPath)
      .then(
        function(fbiApiResponseData){
          return fbiApiResponseData.json();//json.data
        }
      )
      .then(
        function(fbiApiResponseData)
        {
          console.log(fbiApiResponseData);
          var fbiEntry = fbiApiWord.value
          var counter = 1
          var i = parseInt(fbiEntry) - 1
          let text = "<table>"
          var fbiMenuWord = fbiMenu.value
          for (let x in fbiApiResponseData.items)
          for (let s in fbiApiResponseData.items[x].subjects)
          if (fbiApiResponseData.items[x].subjects[s] === 'Kidnappings and Missing Persons' ||   fbiApiResponseData.items[x].subjects[s] === 'ViCAP Missing Persons' )
          {
            if (fbiEntry || fbiMenuWord === 'all')
            {
              text += "<tr>";
              text += "<td>" +
              (counter ++) + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].title + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].description + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].details + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].sex + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].race_raw + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].uid + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].hair_raw + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].weight + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].url + "</td>";
              text += "<td>" +
              fbiApiResponseData.items[x].person_classification + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'title')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].title + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'description')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].description + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'details')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].details + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'sex')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].sex + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'race')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].race_raw + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'id')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].uid + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'hair color')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].hair_raw + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'weight')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].weight + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'url')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";              text += "<td>" +
              fbiApiResponseData.items[x].url + "</td></tr>";
            }
            else if (fbiEntry || fbiMenuWord === 'classification')
            {
              text += "<tr>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td></td>";
              text += "<td>" +
              fbiApiResponseData.items[x].person_classification + "</td></tr>";
            }
          }
          // number entry
          if (parseInt(fbiEntry))
          {
            // display choosen fbi id
            text += "<tr>";
            text += "<td>" +
            fbiEntry + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].title + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].description + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].details + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].sex + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].race_raw + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].uid + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].hair_raw + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].weight + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].url + "</td>";
            text += "<td>" +
            fbiApiResponseData.items[i].person_classification + "</td></tr>";
            // create missing person
            var createMissingPersonData =
            {
              missing_person:
              {
                name: fbiApiResponseData.items[i].title,
                sex: fbiApiResponseData.items[i].sex,
                race: fbiApiResponseData.items[i].race_raw,
                hair_color: fbiApiResponseData.items[i].hair_raw,
                weight: fbiApiResponseData.items[i].weight
              }
            }
            // HTTP Call
            fetch(missingPeoplePath,
            {
              method: 'POST',
              headers:
              {
                'Content-Type': 'application/json',
                'authorization': authHeader
              },
              body: JSON.stringify(createMissingPersonData)
            })
            // Display text
            .then((createMissingPersonResponse) =>
            {
              // Results
              if (createMissingPersonResponse.status === 201)
              {
                createMissingPersonResponse.json()
                .then((createMissingPersonData) =>
                {
                  console.log(createMissingPersonData);
                });
              }
              // Status
              else
              {
                createMissingPersonResponse.json()
                .then((createMissingPersonData) =>
                {
                  alert(`Return code ${createMissingPersonResponse.status} ${createMissingPersonResponse.statusText}`);
                })
                .catch((createMissingPersonError) =>
                {
                  console.log(createMissingPersonError);
                  alert(createMissingPersonError);
                });
              }
            })  // .then((createMissingPersonResponse)
            // missing person entered into database
            fetch(missingPeoplePath,
            {
              headers:
              {
                'Content-Type':'application/json',
                'authorization':authHeader
              }
            })
            .then((listMissingPeopleResponse) =>
            {
              console.log(listMissingPeopleResponse);
              if (listMissingPeopleResponse.status === 200)
              {
                readMissingPersonResultsDiv.innerHTML = '';
                listMissingPeopleResponse.json()
                .then((listMissingPeopleData) =>
                {
                  console.log(listMissingPeopleData);
                  if (listMissingPeopleData.length === 0)
                  {
                    let textDisplay = document.createElement('P')
                    textDisplay.textContent = "No Available Missing Persons Files."
                    readMissingPersonResultsDiv.appendChild(textDisplay)
                  }
                  else
                  {
                    // display last missing persons table entry
                    var listMissingPeopleLastIndex = (listMissingPeopleData.length)-1
                    let text = "<table>"
                      text += "<tr>";
                      text += "<td>" +
                      listMissingPeopleData[listMissingPeopleLastIndex].id + "</td>";
                      text += "<td>" +
                      listMissingPeopleData[listMissingPeopleLastIndex].name + "</td>";
                      text += "<td>" +
                      listMissingPeopleData[listMissingPeopleLastIndex].sex + "</td>";
                      text += "<td>" +
                      listMissingPeopleData[listMissingPeopleLastIndex].race + "</td>";
                      text += "<td>" +
                      listMissingPeopleData[listMissingPeopleLastIndex].age + "</td>";
                      text += "<td>" +
                      listMissingPeopleData[listMissingPeopleLastIndex].hair_color + "</td>";
                      text += "<td>" +
                      listMissingPeopleData[listMissingPeopleLastIndex].weight + "</td></tr>";
                    text += "</table>"
                    readMissingPersonResultsDiv.innerHTML = text;
                    // status report entered into database
                    var createStatusReportData =
                    {
                      status_report:
                      {
                        case_id: fbiApiResponseData.items[i].uid,
                        description: fbiApiResponseData.items[i].description,
                        details: fbiApiResponseData.items[i].details,
                        image_url: fbiApiResponseData.items[i].url
                      }
                    }
                    var fbiCreateIdMissingPersonStatusReport = listMissingPeopleData[(listMissingPeopleData.length)-1].id
                    fetch
                    (
                      `${missingPeoplePath}/${parseInt(fbiCreateIdMissingPersonStatusReport)}/status_reports`,
                      {
                        method: 'POST',
                        headers:
                        {
                          'Content-Type': 'application/json',
                          'authorization': authHeader
                        },
                        body: JSON.stringify(createStatusReportData)
                      }
                    )
                  }
                });// .then((listMissingPeopleData)
              }
              else
              {
                alert(`Return code ${listMissingPeopleResponse.status} ${listMissingPeopleResponse.statusText}`);
              }
            })// end .then((listMissingPeopleResponse)
            .catch((listMissingPeopleError) =>
            {
              console.log(listMissingPeopleError);
              alert(listMissingPeopleError);
            });
          }// end if parse
          text += "</table>"
          fbiResultsDiv.innerHTML = text;
        }
      )
    }// end else if
  });// end fbiOperationsDiv
}// function handle fbi ajax
document.addEventListener('DOMContentLoaded', handle_fbi_ajax(event));
// :)
