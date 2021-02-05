# ACCESS TO HEAVEN

base url : http://localhost:PORT

## App Requirements
---

Dependencies :
- expres
- pg
- sequelize
- axios
- bcryptjs
- jsonwebtoken
- google-auth-library
- cors

Dev-dependencies :
- dotenv
- sequelize-cli


## Endpoint List
---

### Register

- **URL** : `/register`
- **Method** : `POST`
- **Data Params** :
    ```
    email=string
    password=string
    ```

  _Request Header_
  ```

  ```

  _Request Body_
  ```
  {
    "name": "<user-name>",
    "email": "<user>@mail.com",
    "password": "<user-password>",
    "city": "<user-city>"
  }
  ```

- **Success Response**

  _Response(201 - Created)_
  ```
  {
    "id": <given id by system>,
    "email": "<user>@mail.com",
    "city": "<user-city>"
  }
  ```

- **Error Response**

  _Response(400 - Bad Request)_
  ```
  {
    "errors": [
      "Email must be unique"
    ]
  }
  ```
  
  _Response(400 - Bad Request)_
  ```
  {
    "errors": [
      "not email format"
    ]
  }
  ```

  _Response(500 - Internal Server Error)_
  ```
  {
    "errors": "Internal Server Error"
  }
  ```

---
