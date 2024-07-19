document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();
            
            dataContainer.innerHTML = ''; // Clear the loading message

            const userList = document.createElement('ul');

            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.textContent = user.name;
                userList.appendChild(userItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            dataContainer.innerHTML = ''; // Clear the loading message
            dataContainer.textContent = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    fetchUserData();
});
