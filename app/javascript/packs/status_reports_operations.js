function handle_status_reports_ajax(event)
{
  console.log('DOM fully loaded and parsed');
  // Headers
  const authHeader = localStorage.getItem("authHeader");
  const statusReportsCrudOperationsDiv = document.getElementById('status_reports_crud_operations_div');
    // Status Reports CRUD results divs
  const createStatusReportResultsDiv = document.getElementById('create_status_report_results_div');
  const readStatusReportResultsDiv = document.getElementById('read_status_report_results_div');
  const updateStatusReportResultsDiv = document.getElementById('update_status_report_results_div');
  const deleteStatusReportResultsDiv = document.getElementById('delete_status_report_results_div');
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
  // Paths
  const missingPeoplePath = 'http://localhost:3001/api/v1/missing_persons';
  // CRUD operations
  statusReportsCrudOperationsDiv.addEventListener('click', async (event) =>
  {
    // Status Reports CRUD
    // Create, Status Reports
    if (event.target === createStatusReportButton)
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
  });// crudOperationsDiv
}// function handle ajax
document.addEventListener('DOMContentLoaded', handle_status_reports_ajax(event));

// :)
