# DineEaseAPI 🍽️  

**DineEaseAPI** is a feature-rich restaurant and dish management API designed for smooth integration with food-related web and mobile applications. Built using **Node.js**, **Express**, and **SQLite**, it offers endpoints for retrieving, filtering, and sorting restaurant and dish data.

---

## ✨ Key Features  
### 🏨 Restaurant Management  
- **Fetch All Restaurants:**  
  `GET /restaurants`  
  📋 Retrieve all restaurant data.  
- **Restaurant by ID:**  
  `GET /restaurants/details/:id`  
  🔍 Get detailed information about a specific restaurant.  
- **Filter by Cuisine:**  
  `GET /restaurants/cuisine/:cuisine`  
  🍜 Retrieve restaurants by cuisine type.  
- **Filter by Attributes:**  
  `GET /restaurants/filter?isVeg=<value>&hasOutdoorSeating=<value>&isLuxury=<value>`  
  🎯 Filter restaurants based on multiple attributes.  
- **Sort by Rating:**  
  `GET /restaurants/sort-by-rating`  
  ⭐ Retrieve restaurants sorted by ratings.  

### 🍴 Dish Management  
- **Fetch All Dishes:**  
  `GET /dishes`  
  📋 Retrieve all available dish data.  
- **Dish by ID:**  
  `GET /dishes/details/:id`  
  🔍 View details of a specific dish.  
- **Filter by Vegetarian Status:**  
  `GET /dishes/filter?isVeg=<value>`  
  🌱 Filter dishes by vegetarian status.  
- **Sort by Price:**  
  `GET /dishes/sort-by-price`  
  💵 Retrieve dishes sorted by price in ascending order.  

---

## 🚀 Getting Started  
### 🛠️ Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/ankitadhara28/DineEaseAPI.git  
   cd DineEaseAPI  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Run the server:  
   ```bash  
   npm start  
   ```  

The API will be accessible at `http://localhost:3000`.

---

## 📂 Project Structure  
```plaintext  
DineEaseAPI/  
├── BD4_CW/  
│   └── database.sqlite   # SQLite database  
├── node_modules/         # Dependencies  
├── index.js              # Main entry point  
├── package.json          # Project configuration  
└── README.md             # Documentation  
```  

---

## 🛡️ Technologies Used  
- **Node.js**  
- **Express.js**  
- **SQLite**  
- **CORS** for cross-origin resource sharing  
- **JSON** for data exchange  

---

## 🌟 Future Enhancements  
- 🔐 Add user authentication and authorization.  
- ✏️ Implement restaurant and dish creation endpoints.  
- 🔍 Add search functionality with fuzzy matching.  
- 📄 Enable pagination for large data sets.  

---

## ✍️ Author  
Crafted with ❤️ by [Ankita Dhara](https://github.com/ankitadhara28). 🎉  

---

## 📄 License  
This project is licensed under the [MIT License](./LICENSE).  

---

