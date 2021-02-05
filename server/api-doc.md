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
  ---

  ### Jadwal Sholat (prayer schedule)

- **URL** : `/jadwal-sholat`
- **Method** : `GET`
- **Data Params** :

  _Request Header_
  ```
  "token": <access-token from logged in>
  ```

- **Success Response**

  _Response(200 - OK)_
  ```
  {
    "code": 200,
    "status": "OK",
    "results": {
        "datetime": [
            {
                "times": {
                    "Imsak": "04:29",
                    "Sunrise": "05:48",
                    "Fajr": "04:39",
                    "Dhuhr": "12:04",
                    "Asr": "15:21",
                    "Sunset": "18:19",
                    "Maghrib": "18:28",
                    "Isha": "19:23",
                    "Midnight": "23:29"
                },
                "date": {
                    "timestamp": 1612483200,
                    "gregorian": "2021-02-05",
                    "hijri": "1442-06-23"
                }
            }
        ],
        "location": {
            "latitude": -6.917463779449463,
            "longitude": 107.61912536621094,
            "elevation": 710,
            "city": "Bandung",
            "country": "Republic of Indonesia",
            "country_code": "ID",
            "timezone": "Asia/Jakarta",
            "local_offset": 7
        },
        "settings": {
            "timeformat": "HH:mm",
            "school": "Ithna Ashari",
            "juristic": "Shafii",
            "highlat": "None",
            "fajr_angle": 18,
            "isha_angle": 17
        }
    }
  }
  ```

- **Error Response**

  _Response(401 - Unauthorized)_
  ```
  {
    "error": "Invalid Token"
  }
  ```
  _Response(500 - Internal Server Error)_

  ```
  {
    "errors": "Internal Server Error"
  }
  ```
---
  ### Weather

- **URL** : `/weather`
- **Method** : `GET`
- **Data Params** :

  _Request Header_
  ```
  "token": <access-token from logged in>
  ```

- **Success Response**

  _Response(200 - OK)_
  ```
  {
    "data": [
        {
            "rh": 74.75,
            "pod": "d",
            "lon": 111.7844,
            "pres": 1005,
            "timezone": "Asia/Jakarta",
            "ob_time": "2021-02-05 01:19",
            "country_code": "ID",
            "clouds": 99,
            "ts": 1612487984,
            "solar_rad": 99,
            "state_code": "08",
            "city_name": "Bandung",
            "wind_spd": 6.77883,
            "wind_cdir_full": "west-northwest",
            "wind_cdir": "WNW",
            "slp": 1009.5,
            "vis": 24,
            "h_angle": -45,
            "sunset": "10:55",
            "dni": 567.86,
            "dewpt": 23.2,
            "snow": 0,
            "uv": 1.90417,
            "precip": 0,
            "wind_dir": 285,
            "sunrise": "22:30",
            "ghi": 436.46,
            "dhi": 183.37,
            "aqi": 27,
            "lat": -8.1676,
            "weather": {
                "icon": "c04d",
                "code": 804,
                "description": "Overcast Clouds"
            },
            "datetime": "2021-02-05:01",
            "temp": 28,
            "station": "WARR",
            "elev_angle": 33.01,
            "app_temp": 31.3
        }
    ],
    "count": 1
  }
  ```

- **Error Response**

  _Response(401 - Unauthorized)_
  ```
  {
    "error": "Invalid Token"
  }
  ```
  _Response(500 - Internal Server Error)_

  ```
  {
    "errors": "Internal Server Error"
  }
  ```
  ---
  ### Kisah nabi-nabi (story of the prophets)

- **URL** : `/kisah-nabi`
- **Method** : `GET`
- **Data Params** :

  _Request Header_
  ```
  "token": <access-token from logged in>
  ```

  _Request Body_
  ```
  {
    "nabi": <prophet names, e.g., "muhammad">
  }
  ```

- **Success Response**

  _Response(200 - OK)_
  ```
  {
    "code": 200,
    "message": "ok",
    "nabi": {
        "nama": "Nabi Muhammad SAW",
        "lahir": "570",
        "umur": 62,
        "tempat": "Mekkah",
        "image": "http://2.bp.blogspot.com/-fn_NMHe1svk/Vn3XuIdeeUI/AAAAAAAABvk/86DPb6Msvps/s320/muhammad.png",
        "kisah": "Pada waktu umat manusia dalam kegelapan dan suasana jahiliyyah.....
      },
    "creator": "Zhirrr"
  }
  ```

- **Error Response**

  _Response(401 - Unauthorized)_
  ```
  {
    "error": "Invalid Token"
  }
  ```
  _Response(500 - Internal Server Error)_

  ```
  {
    "errors": "Internal Server Error"
  }
  ```
---
### Users Setting

- **URL** : `/setting/:id`
- **Method** : `PUT`
- **Data Params** :
    ```
    name=string
    email=string
    currentPassword=string
    newPassword=string
    city=String
    ```

  _Request Header_
  ```
  "token": <access-token from logged in>
  ```

   _Request Params_
  ```
  "id": <User id>
  ```

  _Request Body_
  ```
  {
    "name": "<user-name>",
    "email": "<user>@mail.com",
    "currentPassword": "<user-current password>",
    "newPassword": "<user-new password>",
    "city": "<user-city>"
  }
  ```

- **Success Response**

  _Response(200 - OK)_
  ```
  {
    "data": {
        "id": 3,
        "name": "Oyrus",
        "email": "Oyrus@mail.com",
        "password": "$2a$10$P8GuefnWzh4G7r7c7cirB.a2WukwZRUpLMkYvEwawhknNURvM30VK",
        "city": "Medan",
        "createdAt": "2021-02-05T01:41:36.285Z",
        "updatedAt": "2021-02-05T02:12:08.943Z"
    }
  }
  ```

- **Error Response**

  _Response(400 - Bad Request)_
  ```
  {
    "error": "Password did not match!"
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

  _Response(401 - Invalid Token)_
  ```
  {
    "error": "Invalid Token"
  }
  ```

  _Response(401 - Invalid Token)_
  ```
  {
    "error": "Access denied!! you not authorized"
  }
  ```

  _Response(500 - Internal Server Error)_
  ```
  {
    "errors": "Internal Server Error"
  }
  ```

---