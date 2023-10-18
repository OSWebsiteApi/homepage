fetch('')
    .then(response => response.text())
    .then(mdContent => {
        // Process the MD content here
    })
    .catch(error => {
        console.error('Error fetching MD file: ', error);
    });
