
# REFT (Rent Easy For Teacher)

* Allow the person to publish his hall and room on this website with the needed information, such as the location, pictures of the place, the rental price and contact after that Teacher can find its appropriate hall according to his location







![App Screenshot](./screenshots/background.png)


# Deployment

To deploy this project:

```bash
 npm run install
```


- Setting .env:
```bash

REACT_APP_DEV_API        =http://localhost:3006
REACT_APP_DEV_FRONT      =http://localhost:3000
REACT_APP_DEV_VIDEO_API  =http://localhost:3006/api/v1/halls/video
REACT_APP_DEV_PDF_API    =http://localhost:3006/api/v1/halls/pdf

REACT_APP_PROD_API       =https://backend-reft-website-4.onrender.com
REACT_APP_PROD_FRONT     =https://frontend-reft-website.vercel.app/
REACT_APP_PROD_VIDEO_API =https://backend-reft-website-4.onrender.com/api/v1/halls/video
REACT_APP_PROD_PDF_API   =https://backend-reft-website-4.onrender.com/api/v1/halls/pdf

# Switch Between prod | dev
REACT_APP_NODE_ENV         =dev
REACT_APP_PAYPAL_BASE_URL  =https://api-m.sandbox.paypal.com
REACT_APP_ADMIN_CODE       ='admin_1/id=80226753244'


```
```bash
  npm run start
```
# Auth
* responsive design in signin and signup
![App Screenshot](./screenshots/1.png)
![App Screenshot](./screenshots/10.png)

