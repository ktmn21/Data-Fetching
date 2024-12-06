# React Authentication and Data Fetching Example

This project demonstrates the use of React to create a simple authentication flow and data fetching tasks. It integrates the REQRES API for user registration, login, and profile management, and uses `axios` to fetch data from various endpoints like **users**, **posts**, and **comments**.

The project includes the following functionality:
- User Login
- User Registration
- User Profile Page with Logout
- Data Fetching tasks:
  - Fetch and Display User Data
  - Fetch Data and Show Loading State
  - Handle API Errors Gracefully
- Routing with React Router
- Bootstrap for UI styling

## Features

### 1. **Authentication**
- **Login Page:** Allows users to log in using email and password via the REQRES API.
- **Register Page:** New users can register an account via the REQRES API.
- **User Profile:** Displays user data including name, photo, and email after successful login.
- **Logout:** Clears the session token and redirects the user back to the login page.

### 2. **Data Fetching Tasks**
- **Fetching Data 1:** Fetch and display user data from the API.
- **Fetching Data 2:** Implement loading state while fetching data.
- **Fetching Data 3:** Handle errors gracefully and provide retry mechanism.

## Folder Structure
```
src/
├── components/
│   └── Navbar.js            # Navbar component with links to different pages
├── features/
│   └── FetchingData1/       # Fetching Data 1 related components
│   └── FetchingData2/       # Fetching Data 2 related components
│   └── FetchingData3/       # Fetching Data 3 related components
├── pages/
│   └── AuthPage.js          # Authentication page (Login/Registration links)
│   └── HomePage.js          # Home page of the application
│   └── LoginPage.js         # Login page for users
│   └── RegisterPage.js      # Registration page for users
│   └── UserPage.js          # User profile page after successful login
│   └── FetchingData1Page.js # Page for Fetching Data 1 tasks
│   └── FetchingData2Page.js # Page for Fetching Data 2 tasks
│   └── FetchingData3Page.js # Page for Fetching Data 3 tasks
├── App.js                   # Main application entry point
├── index.js                 # ReactDOM render function
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```
