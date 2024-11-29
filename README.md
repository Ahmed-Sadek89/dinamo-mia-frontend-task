# React Developer Technical Assignment - Dinamo

## Live and Repo URL
- **Live** https://dinamo-mia-frontend-task.vercel.app/
- **Repo** https://github.com/Ahmed-Sadek89/dinamo-mia-frontend-task

## Project Duration
- **Start** 11/28/2024 at 7.00 PM
- **Start** 11/29/2024 at 8.00 PM
- **Total hours per day** 5 hours

## Overview

This project is a technical assignment for the React Developer position at Dinamo. The goal of this project was to demonstrate my skills in front-end development using **Next.js 14**, **TypeScript**, and **Ant Design**. The application interacts with the **JSONPlaceholder API** to fetch and manipulate data, with error handling and a user-friendly interface.

## Objectives

1. **Fetch and Display Data**:
   - Fetched data from the `/posts` endpoint of the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).
   - Displayed the fetched data in a table using **Ant Design's Table component**.

2. **Form for Adding Data**:
   - Created a form with **Ant Design** for adding a new post.
   - Included fields for **title** and **body**.
   - On form submission, sent a **POST request** to `/posts` to simulate adding a new post and displayed the returned data.

3. **Error Handling**:
   - Implemented basic error handling for API requests.
   - Used **Ant Design's notification component** to display error messages to the user when something goes wrong.

4. **TypeScript Usage**:
   - Defined TypeScript **interfaces/types** for the data fetched from the API.
   - Ensured the code is **type-safe** and followed best practices for clean, maintainable code.


5. **Form for Updating Data**:
   - Added an **Edit button** for each row in the table.
   - Clicking the button opens a form pre-filled with the selected post’s title and body.
   - On form submission, made a **PUT request** to `/posts/{id}` to simulate updating the post.

6. **Delete Data**:
   - Added a **Delete button** for each row in the table.
   - Clicking the button sends a **DELETE request** to `/posts/{id}` to simulate deleting the post.

7. **Server-Side Rendering (SSR)**:
   - Implemented **Server-Side Rendering** using **Next.js 14** to improve performance and SEO.
   - This was an optional task, but I included it as an enhancement to demonstrate my skills in SSR with Next.js.

## Features
- **responsive design** using table AntDesign and flexbox css.
- **using Ant Design** table,select input, pagination, Notification, Form, Modal and Button components.
- **Type-safe** development with **TypeScript** to ensure reliable and maintainable code.
- **User-friendly** form for adding, editing, and deleting posts.
- **Error Handling**: with **Ant Design notifications** and **Routing error handling**  for a smooth user experience.

## Technologies Used

- **Next.js 14**: Framework for building the application with SSR (Server-Side Rendering).
- **TypeScript**: For type-safe development.
- **Ant Design**: UI framework for building components like tables, forms, buttons, and notifications.

## API
- **JSONPlaceholder API**: Public API used to fetch data for posts and simulate CRUD operations (create, read, update, delete).

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16.x or higher)
- **npm** or **yarn** for managing packages

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dinamo-mia-frontend-task.git
   cd dinamo-mia-frontend-task
   create .env file and put BACKEND_LINK=https://jsonplaceholder.typicode.com/
    npm install or yarn install
