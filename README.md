# BookStore Web Application 📚

A full-stack web application for managing and exploring books, built with MongoDB, Express JS, React JS, and Node JS. The application offers secure user authentication, theme customization, and a responsive interface for seamless interaction across devices.

## Features 🎯

- **Responsive Design**: Ensures a seamless experience on various devices.
- **User Authentication**: 🔐 Secure login and logout functionality.
- **Theme Customization**: 🎨 Personalize the interface with customizable themes.
- **Efficient Data Management**: 📊 Powered by MongoDB for robust backend operations.
- **Intuitive User Interface**: 🖥️ Designed with React JS for smooth navigation and interaction.

## Technologies Used 💻

- **Frontend**: React JS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation and Setup 🚀

To set up the project locally, follow these steps:

### Prerequisites ✅
- Node.js and npm installed on your system.
- MongoDB instance running locally or a connection string for a cloud MongoDB database.

### Steps 📂

1. **Clone the Repository**
```bash
https://github.com/<your-username>/bookstore-web-app.git
```

2. **Navigate to the Project Directory**
```bash
cd bookstore-web-app
```

3. **Install Dependencies**
```bash
npm install
```

4. **Set Up Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

5. **Run the Backend Server**
```bash
npm start
```

6. **Navigate to the Frontend Directory**
```bash
cd client
```

7. **Install Frontend Dependencies**
```bash
npm install
```

8. **Start the Frontend Server**
```bash
npm start
```

The application will be running at `http://localhost:3000`.

## Folder Structure 📁

```
bookstore-web-app/
├── Backend/                # Backend code
│   ├── controller/         # Request handlers
│   ├── model/              # Database models
│   ├── node_modules/       # Node.js modules
│   ├── route/              # API routes
│   ├── .env                # Environment variables
│   ├── index.js            # Entry point for the backend server
│   ├── package.json        # Backend dependencies
│   └── package-lock.json   # Backend dependency lock file
│
├── Frontend/               # Frontend code
│   ├── public/             # Static assets
│   ├── src/                # React components and application logic
│   ├── .eslintrc.cjs       # ESLint configuration
│   ├── .gitignore          # Git ignore file
│   ├── index.html          # Entry point for the frontend
│   ├── list.json           # Sample data
│   ├── package.json        # Frontend dependencies
│   ├── package-lock.json   # Frontend dependency lock file
│   ├── postcss.config.js   # PostCSS configuration
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── vite.config.js      # Vite configuration
│
├── README.md               # Project documentation
```

## Features Breakdown 🔍

### User Features 🌟
- 🔐 Secure login and logout functionality.
- 🎨 Customize the interface theme as per preferences.
- 📚 Browse and manage book collections effortlessly.

### Admin Features 🛠️
- ➕ Add, edit, and delete book entries.
- 📊 View and manage user activities.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute:
- Fork the repository.
- Create a feature branch.
- Commit your changes.
- Submit a pull request.

## Contact 📞
For any inquiries or feedback, feel free to contact me:
- **Email**: [97ravi2002@gmail.com](mailto:97ravi2002@gmail.com)
- **LinkedIn**: [Ravi](https://www.linkedin.com/in/ravi-388a26280/)
- **Portfolio**: [Ravi's Portfolio](https://portfolio-ravi-sd39.onrender.com/)

---

Enjoy exploring the BookStore Web Application! 📚
