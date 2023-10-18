// Replace these with your actual GitLab API endpoint and token
const apiUrl = 'https://gitlab.com/api/v4/groups/opensourceecommerce1/issues'
const authToken = 'YOUR_PERSONAL_ACCESS_TOKEN';

fetch(apiUrl, {
    headers: {
        'Private-Token': authToken,
    },
})
    .then(response => response.json())
    .then(issues => {
        issues.forEach(issue => {
            if (issue.state === 'closed') {
                // Mark this issue as "done" or display it as such
            }
        });
    })
    .catch(error => console.error('Error fetching GitLab issues:', error));
