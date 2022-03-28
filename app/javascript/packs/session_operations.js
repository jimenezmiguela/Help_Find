
function handle_session (event) {
  console.log('DOM fully loaded and parsed');

  // Backend API controller path
  const usersHelpFindBackPath = 'http://localhost:3001/users';

  // session rest operations
  const sessionRestOperationsDiv = document.getElementById('session_rest_operations_div');

  // display ajax results
  const ajaxResultsDiv = document.getElementById('ajax_results_div');

  // buttons
  const createUserButton = document.getElementById('create_user_button')

  const userLogonButton = document.getElementById('user_logon_button');

  const userLogoffButton  = document.getElementById('user_logoff_button');

  // user credentials
  // create user
  const createUserEmail = document.getElementById('create_user_email');

  const createUserPassword = document.getElementById('create_user_password');

  // logon user
  const userLogonEmail = document.getElementById('user_log_on_email');

  const userLogonPassword = document.getElementById('user_log_on_password');

  // rest operations
  sessionRestOperationsDiv.addEventListener('click', (event) => {
    // user create
    if (event.target === createUserButton)
    {
      var createUserData =
      {
        // key, values
        "user":
        {
          email: createUserEmail.value,
          password: createUserPassword.value
        }
      }
      // HTTP call
      fetch(usersHelpFindBackPath,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(createUserData)
        }
      )
      // HTML
      .then((createUserResponse) =>
      {
        // 201:  successfully created
        if (createUserResponse.status === 201)
        {
          createUserResponse.json()
            .then((createUserData) =>
            {
              // add json data to HTML
              ajaxResultsDiv.innerHTML = '';
              let textDisplay=document.createElement('P');
              textDisplay.textContent=JSON.stringify(createUserData);
              ajaxResultsDiv.appendChild(textDisplay);
            });
        }

        else
        {
          createUserResponse.json()
          .then((createUserData) =>
            {
              alert(`Return code ${createUserResponse.status} ${createUserResponse.statusText}
              ${JSON.stringify(createUserData)}`);
            }
          )
          .catch((createUserError) =>
          {
            console.log(createUserError);
            alert(createUserError);
          }
          );
        }
      });
    }

    else if (event.target === userLogonButton)
    {
      var logonUserData =
      {
        "user":
        {
          email: userLogonEmail.value,
          password: userLogonPassword.value
        }
      };

      // call
      fetch(`${usersHelpFindBackPath}/sign_in`,
        // logon
        { method: 'POST',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(logonUserData)
        })
      .then((logonResponse) =>
      {
        // 201:  successfully created
        if (logonResponse.status === 201)
        {
          // add data
          ajaxResultsDiv.innerHTML = '';
          logonResponse.json()
          .then((logonUserData) =>
          {
            // logon create HTML element
            let textDisplay = document.createElement('P');
            textDisplay.textContent = JSON.stringify(logonUserData);
            ajaxResultsDiv.appendChild(textDisplay);
            logonResponse.headers
            // .forEach(function(value, key)
            //   {
            //     headersTextDisplay = document.createElement('P');
            //     headersTextDisplay.textContent = `${key} ${value}`
            //     ajaxResultsDiv.appendChild(headersTextDisplay);
            //   });
          localStorage.setItem("authHeader", logonResponse.headers.get('authorization'));
          });
        }
        else
        {
          alert(`Return code ${logonResponse.status} ${logonResponse.stausText}`);
        }
      })
      .catch((error) =>
        {
          console.log(error);
          alert(error);
        });
    }

    else if(event.target === userLogoffButton)
    {
      fetch(`${usersHelpFindBackPath}/sign_out`,
      {
        method:'DELETE',
        headers:{'Content-Type':'application/json',
          'authorization':localStorage.getItem("authHeader")},
      })
      .then((logOffResponse) =>
      {
        if (logOffResponse.status === 200)
        {
          logOffResponse.json()
          .then((logOffData) =>
          {
            ajaxResultsDiv.innerHTML = "";
            let textDisplay = document.createElement('P');
            textDisplay.textContent = JSON.stringify(logOffData);
            ajaxResultsDiv.appendChild(textDisplay);
          });
        }
        else
        {
          logOffResponse.json()
          .then((logOffData) =>
          {
            alert(`Return code ${logOffResponse.status} ${logOffResponse.statusText} ${JSON.stringify(logOffData)}`);
          })
          .catch((logOffError) =>
          {
            console.log(logOffError);
            alert(logOffError);
          });
        }
      });
    }
  });
}


document.addEventListener('DOMContentLoaded', handle_session(event));
