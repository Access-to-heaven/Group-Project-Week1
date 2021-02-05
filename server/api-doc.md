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
    name=string
    email=string
    password=string
    city=string
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

### Login

- **URL** : `/login`
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
    "email": "<user>@mail.com",
    "password": "<user-password>"
  }
  ```

- **Success Response**

  _Response(200 - OK)_
  ```
  {
    "access_token": "<your access token>"
  }
  ```

- **Error Response**
  
  _Response(400 - Bad Request)_
  ```
  {
    "errors": "Invalid email or password"
  }
  ```

  _Response(500 - Internal Server Error)_
  ```
  {
    "errors": "Internal Server Error"
  }
  ```

---

### List Alquran

- **URL** : `/alquran`
- **Method** : `GET`

  _Request Header_
  ```
  {
    "token": "<your access token>"
  }
  ```

  _Request Body_
  ```

  ```

- **Success Response**

  _Response(200 - OK)_
  ```
  [
    {
        "arti": "Pembukaan",
        "asma": "الفاتحة",
        "ayat": 7,
        "nama": "Al Fatihah",
        "type": "mekah",
        "urut": "5",
        "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3",
        "nomor": "1",
        "rukuk": "1",
        "keterangan": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat."
    },
    ....
  ]
  ```

- **Error Response**

  _Response(401 - Unauthorized)_
  ```
  {
    "errors": "Invalid Token"
  }
  ```

  _Response(500 - Internal Server Error)_
  ```
  {
    "errors": "Internal Server Error"
  }
  ```

---

### Get User For Setting Populate

- **URL** : `/login`
- **Method** : `GET`


  _Request Header_
  ```
  {
    "token": "<your access token>"
  }
  ```

  _Request Body_
  ```
 
  ```

- **Success Response**

  _Response(200 - OK)_
  ```
  {
    
  }
  ```

- **Error Response**
  
     _Response(401 - Unauthorized)_
  ```
  {
    "errors": "Invalid Token"
  }
  ```

  _Response(401 - Unauthorized)_
  ```
  {
    "errors": "Access denied!! you not authorized"
  }
  ```

  _Response(404 - Not Found)_
  ```
  {
    "errors": "Error Not Found"
  }
  ```

  _Response(500 - Internal Server Error)_
  ```
  {
    "errors": "Internal Server Error"
  }
  ```