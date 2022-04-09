function handle_ajax(event)
{
  console.log('DOM fully loaded and parsed');

  // Headers
  const authHeader = localStorage.getItem("authHeader");

  // Missing People
  // CRUD MissingPerson Results Divs
  const createMissingPersonResultsDiv = document.getElementById('create_missing_person_results_div');
  const readMissingPersonResultsDiv = document.getElementById('read_missing_person_results_div');
  const updateMissingPersonResultsDiv = document.getElementById('update_missing_person_results_div');
  const deleteMissingPersonResultsDiv = document.getElementById('delete_missing_person_results_div');
  const crudOperationsDiv = document.getElementById('crud_operations_div');

    // Status Reports CRUD results divs
  const createStatusReportResultsDiv = document.getElementById('create_status_report_results_div');
  const readStatusReportResultsDiv = document.getElementById('read_status_report_results_div');
  const updateStatusReportResultsDiv = document.getElementById('update_status_report_results_div');
  const deleteStatusReportResultsDiv = document.getElementById('delete_status_report_results_div');
  // API'S divs
  // FBI
  const fbiResultsDiv = document.getElementById('fbi_results_div');
  //  Twitter
  const twitterResultsDiv = document.getElementById('twitter_results_div');
  // Newdata
  const newsdataResultsDiv = document.getElementById('newsdata_results_div');
  // Missing People CRUD:
  // Create, Missing People
  const createName = document.getElementById('create_name');

  const createSex = document.getElementById('create_sex');

  const createRace = document.getElementById('create_race');

  const createAge = document.
  getElementById('create_age');

  const createHairColor = document.getElementById('create_hair_color');

  const createWeight = document.getElementById('create_weight');

  const createMissingPersonButton = document.getElementById('create_missing_person_button');

  // Read, Missing People
  const readMissingPeopleButton = document.getElementById('read_missing_people_button');

  // Update, Missing People
  const updateMissingPersonId = document.getElementById('update_missing_person_id');

  const updateName = document.getElementById('update_name');

  const updateSex = document.getElementById('update_sex');

  const updateRace = document.getElementById('update_race');

  const updateAge = document.getElementById('update_age');

  const updateHairColor = document.getElementById('update_hair_color');

  const updateWeight = document.getElementById('update_weight');

  const updateMissingPersonButton = document.getElementById('update_missing_person_button');

  // Delete, Missing People
  const deleteMissingPersonId = document.getElementById('delete_missing_person_id');

  const deleteMissingPersonButton = document.getElementById('delete_missing_person_button');

  // Status Reports CRUD

  // Create, Status Reports
  const createIdMissingPersonStatusReport = document.getElementById('create_id_missing_person_status_report');

  const createOutsideAgencyId = document.getElementById('create_outside_agency_id');

  const createDescription = document.getElementById('create_description');

  const createDetails = document.getElementById('create_details');

  const createImageUrl = document.getElementById('create_image_url');

  const createStatusReportButton = document.getElementById('create_status_report_button');

  // Read, Status Reports
  const readStatusReportsMissingPersonId = document.getElementById('read_status_reports_missing_person_id');

  const readStatusReportsButton = document.getElementById('read_status_reports_button');

  // Update, Status Reports
  const updateStatusReportMissingPersonId = document.getElementById('update_status_report_missing_person_id');

  const updateStatusReportId = document.getElementById('update_status_report_id');

  const updateOutsideAgencyId = document.getElementById('update_outside_agency_id');

  const updateDescription = document.getElementById('update_description');

  const updateDetails = document.getElementById('update_details');

  const updateImageUrl = document.getElementById('update_image_url');

  const updateStatusReportButton = document.getElementById('update_status_report_button');

  // Delete, Status Reports
  const deleteStatusReportMissingPersonId = document.getElementById('delete_status_report_missing_person_id');

  const deleteStatusReportId = document.getElementById('delete_status_report_id');

  const deleteStatusReportButton = document.getElementById('delete_status_report_button');
  // API'S
  // FBI API
  const fbiApiWord = document.getElementById('fbi_api_word');
  const fbiApiButton = document.getElementById('fbi_api_button');
  const fbiCreateMissingNameButton = document.getElementById('fbi_create_missing_name_button')
  const fbiMenu = document.getElementById('fbi_menu');
  //  Twitter API
  const twitterApiWord = document.getElementById('twitter_api_word');
  const twitterApiButton = document.getElementById('twitter_api_button');
  // Newsdata API
  const newsdataApiWord = document.getElementById('newsdata_api_word');
  const newsdataApiButton = document.getElementById('newsdata_api_button');
  // Paths
  const missingPeoplePath = 'http://localhost:3001/api/v1/missing_persons';
  const fbiPath = 'http://localhost:3001/api/v1/fbi';
  const twitterPath = 'http://localhost:3001/api/v1/twitter';
  const newsdataPath = 'http://localhost:3001/api/v1/newsdata';

  // CRUD operations
  crudOperationsDiv.addEventListener('click', async (event) =>
  {
    // Create, Missing People
    if (event.target == createMissingPersonButton)
    {
      // Collect data
      // It should be var createMissingPersonData = { missing_person: (name: createName.value, ...}}
      var createMissingPersonData =
      {
        missing_person:
        {
          name: createName.value,
          sex: createSex.value,
          race: createRace.value,
          age: createAge.value,
          hair_color: createHairColor.value,
          weight: createWeight.value
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

            // HTML TABLE
            let text = "<table>"
            // for (let x in createMissingPersonData)
            // {
              text += "<tr>";
              text += "<td>" +
              createMissingPersonData.id + "</td>";
              text += "<td>" +
              createMissingPersonData.name + "</td>";
              text += "<td>" +
              createMissingPersonData.sex + "</td>";
              text += "<td>" +
              createMissingPersonData.race + "</td>";
              text += "<td>" +
              createMissingPersonData.age + "</td>";
              text += "<td>" +
              createMissingPersonData.hair_color + "</td>";
              text += "<td>" +
              createMissingPersonData.weight + "</td></tr>";
            // }
            text += "</table>"
            createMissingPersonResultsDiv.innerHTML = text;

            // JSON ONLY
            // createMissingPersonResultsDiv.innerHTML = '';
            // let displayText = document.createElement('P');
            // displayText.textContent = JSON.stringify(createMissingPersonData);
            // createMissingPersonResultsDiv.appendChild(displayText);
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
    }

    // Read, Missing People
    else if (event.target === readMissingPeopleButton)
    {
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
              // HTML TABLE
              let text = "<table>"
              for (let x in listMissingPeopleData)
              {
                text += "<tr>";
                text += "<td>" +
                listMissingPeopleData[x].id + "</td>";
                text += "<td>" +
                listMissingPeopleData[x].name + "</td>";
                text += "<td>" +
                listMissingPeopleData[x].sex + "</td>";
                text += "<td>" +
                listMissingPeopleData[x].race + "</td>";
                text += "<td>" +
                listMissingPeopleData[x].age + "</td>";
                text += "<td>" +
                listMissingPeopleData[x].hair_color + "</td>";
                text += "<td>" +
                listMissingPeopleData[x].weight + "</td></tr>";
              }
              text += "</table>"
              readMissingPersonResultsDiv.innerHTML = text;

              // JSON ONLY
              // for (let i = 0; i < listMissingPeopleData.length; i++)
              // {
              //   let textDisplay = document.createElement('P');
              //   textDisplay.textContent = JSON.stringify(listMissingPeopleData[i]);
              //   readMissingPersonResultsDiv.appendChild(textDisplay);
              // }
            }
          });// .then((listMissingPeopleData)
        }
        else
        {
          alert(`Return code ${listMissingPeopleResponse.status} ${listMissingPeopleResponse.statusText}`);
        }
      })// .then((listMissingPeopleResponse)
      .catch((listMissingPeopleError) =>
      {
        console.log(listMissingPeopleError);
        alert(listMissingPeopleError);
      });
    }
    // Update
    else if (event.target === updateMissingPersonButton)
    {
      var updateMissingPersonData =
      {
        missing_person:
        {
          name: updateName.value,
          sex: updateSex.value,
          race: updateRace.value,
          age: updateAge.value,
          hair_color: updateHairColor.value,
          weight: updateWeight.value
        }
      }
      if (!updateMissingPersonData.update_name) {
        delete updateMissingPersonData.update_name
      }
      if (updateMissingPersonData.update_sex) {
        delete updateMissingPersonData.update_sex
      }
      if (!updateMissingPersonData.update_race) {
        delete updateMissingPersonData.update_race
      }
      if (updateMissingPersonData.update_age) {
        delete updateMissingPersonData.update_age
      }
      if (!updateMissingPersonData.update_hair_color) {
        delete updateMissingPersonData.update_hair_color
      }
      if (updateMissingPersonData.update_weight) {
        delete updateMissingPersonData.update_weight
      }
      fetch(`${missingPeoplePath}/${updateMissingPersonId.value}`,
      {
        method: 'PUT',
        headers:
        {
          'Content-Type': 'application/json',
          'authorization': authHeader
        },
        body: JSON.stringify(updateMissingPersonData)
      })
      .then((updateMissingPersonResponse) =>
      {
        if (updateMissingPersonResponse.status === 200)
        {
          updateMissingPersonResponse.json()
          .then((updateMissingPersonData) =>
          {
            // HTML TABLE
            let text = "<table>"
            // for (let x in createMissingPersonData)
            // {
              text += "<tr>";
              text += "<td>" +
              updateMissingPersonData.id + "</td>";
              text += "<td>" +
              updateMissingPersonData.name + "</td>";
              text += "<td>" +
              updateMissingPersonData.sex + "</td>";
              text += "<td>" +
              updateMissingPersonData.race + "</td>";
              text += "<td>" +
              updateMissingPersonData.age + "</td>";
              text += "<td>" +
              updateMissingPersonData.hair_color + "</td>";
              text += "<td>" +
              updateMissingPersonData.weight + "</td></tr>";
            // }
            text += "</table>"
            updateMissingPersonResultsDiv.innerHTML = text;
            // JSON only
            // updateMissingPersonResultsDiv.innerHTML = '';
            // let parag = document.createElement('P');
            // parag.textContent = JSON.stringify(data);
            // updateMissingPersonResultsDiv.appendChild(parag);
          });
        }
        else
        {
          updateMissingPersonResponse.json()
          .then((data) =>
          {
            alert(`Return code ${updateMissingPersonResponse.status} ${updateMissingPersonResponse.statusText} ${JSON.stringify(data)}`);
          })
          .catch((error) =>
          {
            console.log(error);
            alert(error);
          });
        }
      });
    }
    // Delete, Missing People
    else if (event.target === deleteMissingPersonButton)
    {
      try
      {
        const deleteMissingPersonResponse = await
        fetch
        (`${missingPeoplePath}/${delete_missing_person_id.value}`,
          {
            method: 'DELETE',
            headers:
            {
              'Content-Type': 'application/json',
              'authorization': authHeader
            }
          }
        )
        const deleteMissingPersonData = await
        deleteMissingPersonResponse.json()
        if (deleteMissingPersonResponse.status === 200)
        {
          // HTML
          // logon create HTML element
          var word = deleteMissingPersonData.message;

          // // create element
          var displayText = document.createElement('li');
          //
          // // add data to list item
          displayText.innerHTML = word;
          //
          // // add to HTML
          deleteMissingPersonResultsDiv.appendChild(displayText);

          // JSON only
          // deleteMissingPersonResultsDiv.innerHTML = ''
          // let textDisplay = document.createElement('P')
          // textDisplay.textContent = JSON.stringify(deleteMissingPersonData)
          // deleteMissingPersonResultsDiv.appendChild(textDisplay);
        }
        else
        {
          alert(`Return code ${deleteMissingPersonResponse.status} ${deleteMissingPersonResponse.statusText} ${JSON.stringify(deleteMissingPersonData)}`);
        }
      }// end try
      catch (deleteMissingPersonError) {
        console.log(deleteMissingPersonError);
        alert(deleteMissingPersonError);
      }
    }// end else if
    // Status Reports CRUD
    // Create, Status Reports
    else if (event.target === createStatusReportButton)
    {
      try
      {
        var createStatusReportData =
        {
          status_report:
          {
            case_id: createOutsideAgencyId.value,
            description: createDescription.value,
            details: createDetails.value,
            image_url: createImageUrl.value
          }
        }
        const createStatusReportResponse = await
        fetch
        (
          `${missingPeoplePath}/${createIdMissingPersonStatusReport.value}/status_reports`,
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
        const createStatusReportDataHtml = await
        createStatusReportResponse.json()
        if (createStatusReportResponse.status === 201)
        {
          createStatusReportResultsDiv.innerHTML = ''
          let textDisplay = document.createElement('P')
          textDisplay.textContent = JSON.stringify(createStatusReportDataHtml)
          createStatusReportResultsDiv.appendChild(textDisplay);
        }
        else
        {
          alert(`Return code ${createStatusReportResponse.status} ${createStatusReportResponse.statusText} ${JSON.stringify(createStatusReportDataHtml)}`);
        }
      }// end try
      catch(createStatusReportError)
      {
        console.log(createStatusReportError);
        alert(createStatusReportError)
      }
    }// end else if
    // Read, Status Reports
    else if (event.target === readStatusReportsButton)
    {
      try
      {
        const readStatusReportResponse = await
        // HTTP call
        fetch
        (
          `${missingPeoplePath}/${readStatusReportsMissingPersonId.value}/status_reports`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'authorization': authHeader
            }
          }
        )
        const readStatusReportsHtmlData = await readStatusReportResponse.json()
        if (readStatusReportResponse.status === 200)
        {
          readStatusReportResultsDiv.innerHTML = ''
          if (readStatusReportsHtmlData.length === 0)
          {
            let textDisplay = document.createElement('P')
            textDisplay.textContent = "There are no status reports for this missing person."
            readStatusReportResultsDiv.appendChild(textDisplay)
          }
        else
          {
            // HTML TABLE
            let text = "<table>"
            for (let x in readStatusReportsHtmlData)
            {
              text += "<tr>";
              text += "<td>" +
              readStatusReportsHtmlData[x].id + "</td>";
              text += "<td>" +
              readStatusReportsHtmlData[x].missing_person_id + "</td>";
              text += "<td>" +
              readStatusReportsHtmlData[x].description + "</td>";
              text += "<td>" +
              readStatusReportsHtmlData[x].details + "</td>";
              text += "<td>" +
              readStatusReportsHtmlData[x].case_id + "</td>";
              text += "<td>" +
              readStatusReportsHtmlData[x].image_url + "</td></tr>";

            }
            text += "</table>"
            readStatusReportResultsDiv.innerHTML = text;

            // JSON ONLY
            // for (let i = 0; i < readStatusReportsHtmlData.length; i++)
            // {
            //   let textDisplay = document.createElement('P');
            //   textDisplay.textContent = JSON.stringify(readStatusReportsHtmlData[i]);
            //   readStatusReportResultsDiv.appendChild(textDisplay);
            // }
          }
        }
        else
        {
          alert(`Return code ${readStatusReportsHtmlData.status} ${readStatusReportsHtmlData.statusText} ${JSON.stringify(readStatusReportsHtmlData)}`);
        }// end try
      } catch (readStatusReportsError) {
        console.log(readStatusReportsError);
        alert(readStatusReportsError);
      }
    }// end else if
    // Update Status Reports
    else if (event.target === updateStatusReportButton)
    {
      try
      {
        var updateStatusReportsData =
        {
          status_report:
          {
            case_id: updateOutsideAgencyId.value,
            description: updateDescription.value,
            details: updateDetails.value,
            image_url: updateImageUrl.value
          }
        }
        if (!updateStatusReportsData.case_id)
        {delete updateStatusReportsData.case_id}
        if (!updateStatusReportsData.description)
        {delete updateStatusReportsData.description}
        if (!updateStatusReportsData.details)
        {delete updateStatusReportsData.details}
        if (!updateStatusReportsData.image_url)
        {delete updateStatusReportsData.image_url}
        const updateStatusReportResponse = await
        fetch
        (
          `${missingPeoplePath}/${updateStatusReportMissingPersonId.value}/status_reports/${updateStatusReportId.value}`,
          {
            method: 'PATCH',
            headers:
            {
              'Content-Type':'application/json',
              'authorization':authHeader
            },
            body: JSON.stringify(updateStatusReportsData)
          }
        )
        const updateStatusReportsHtmlData =
        await updateStatusReportResponse.json()
        if (updateStatusReportResponse.status === 200)
        {
          updateStatusReportResultsDiv.innerHTML = ''
          let textDisplay = document.createElement('P')
          textDisplay.textContent = JSON.stringify(updateStatusReportsHtmlData)
          updateStatusReportResultsDiv.appendChild(textDisplay);
        }
        else
        {
          alert(`Return code ${updateStatusReportResponse.status} ${updateStatusReportResponse.statusText} ${JSON.stringify(updateStatusReportsHtmlData)}`);
        }
      }// end try
      catch (updateStatusReportError)
      {
        console.log(updateStatusReportError);
        alert(updateStatusReportError);
      }
    }// end else if
    // Delete, Status Reports
    else if (event.target === deleteStatusReportButton)
    {
      try
      {
        const deleteStatusReportResponse = await
        fetch
        (
          `${missingPeoplePath}/${deleteStatusReportMissingPersonId.value}/status_reports/ ${deleteStatusReportId.value}`,
          {
            method: 'DELETE',
            headers:
            {
              'Content-Type':'application/json',
              'authorization':authHeader
            }
          })// await fetch
          const deleteStatusReportData = await
          deleteStatusReportResponse.json()
          if (deleteStatusReportResponse.status === 200)
          {
            deleteStatusReportResultsDiv.innerHTML = ''
            let displayText = document.createElement('P')
            displayText.textContent = JSON.stringify(deleteStatusReportData)
            deleteStatusReportResultsDiv.appendChild(displayText);
          }
          else
          {
            alert(`Return code ${deleteStatusReportResponse.status} ${deleteStatusReportResponse.statusText} ${JSON.stringify(deleteStatusReportData)} `);
          }
      }// try
      catch (deleteStatusReportError)
      {
        console.log(deleteStatusReportError);
        alert(deleteStatusReportError);
      }
    }// end else if
    // API'S
    // FBI
    else if (event.target === fbiApiButton)
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
              if (fbiApiResponseData.items[x].subjects[s] === 'Kidnappings and Missing Persons' ||
                  fbiApiResponseData.items[x].subjects[s] === 'ViCAP Missing Persons' )
          
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
    // twitter fetch
    else if(event.target === twitterApiButton)
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
        // JSON ONLY
        // // var twitterApiResponse = twitterApiRequest.response;
        //       // var twitterApiParsedData = JSON.parse(twitterApiResponse);
        //       // console.log(twitterApiParsedData);
        //       if(twitterApiWord.value == 's')
        //       {
        //         var textData = twitterApiParsedData.data[0].text;
        //       }
        //       var textDisplay = document.createElement('li');
        //       textDisplay.innerHTML = textData;
        //       twitterResultsDiv.appendChild(textDisplay);
      }
    )
  }// end else if
    // Newsdata API
    else if (event.target === newsdataApiButton)
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


          // JSON ONLY
          // var word = newsdataApiWord.value
          // if (word === 'title'){
          //   var textData = newsdataApiResponseData.results[1].title;
          // }
          // else if (word === 'description'){
          //   var textData = newsdataApiResponseData.results[1].description;
          // }
          // else if (word === 'link'){
          //   var textData = newsdataApiResponseData.results[1].link;
          // }
          // var textDisplay = document.createElement('P');
          // textDisplay.innerHTML = textData;
          // newsdataResultsDiv.appendChild(textDisplay);
        }
      )// end .then
    } // end else if
  });// crudOperationsDiv
}// function handle ajax
document.addEventListener('DOMContentLoaded', handle_ajax(event));
















// :)
