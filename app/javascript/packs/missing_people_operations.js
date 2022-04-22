function handle_missing_people_ajax(event)
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
  const missingPeopleCrudOperationsDiv = document.getElementById('missing_people_crud_operations_div');
  // Missing People CRUD:
  // Create, Missing People
  const createName = document.getElementById('create_name');
  const createSex = document.getElementById('create_sex');
  const createRace = document.getElementById('create_race');
  const createAge = document.getElementById('create_age');
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
  // // Paths
  const missingPeoplePath = 'http://localhost:3001/api/v1/missing_persons';
  // CRUD operations
  missingPeopleCrudOperationsDiv.addEventListener('click', async (event) =>
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
  });// crudOperationsDiv
}// function handle ajax
document.addEventListener('DOMContentLoaded', handle_missing_people_ajax(event));

// :)
