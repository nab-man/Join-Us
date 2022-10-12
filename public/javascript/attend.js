async function attendClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/attendance/`, {
      method: 'POST',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
       console.log(response);
    }
  }
  
  document.querySelector('#attend-btn').addEventListener('click', attendClickHandler);
  