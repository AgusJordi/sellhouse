# Sell house

App react native para listar la venta de casas provistas de la api de rapidapi

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:


      ├── app
      │ ├── App.jsx
      │ ├── ...
      ├── screens
      │ ├── HomeScreen.jsx
      │ ├── DetailScreen.jsx
      │ ├── ...
      ├── components
      | ├── Loading.jsx
      │ ├── ...
      ├── config
      │ ├── axiosConfig.jsx
      │ ├── reactQueryConfig.jsx
      │ ├── ...
      ├── data
      │ ├── data.json
      │ ├── ...

### Descripción de las Carpetas

- **app**: Contiene el archivo `App.js` que renderiza todas las pantallas y configura la navegación de la aplicación.
- **screens**: Incluye todas las pantallas de la aplicación, como `HomeScreen.js`, `DetailScreen.js`, etc.
- **components**: Contiene componentes que se utilizan en diferentes partes de la aplicación.
- **config**: Esta carpeta incluye configuraciones para Axios y React Query.
  - `axios.js`: Configuración de Axios para la consulta a la API.
  - `queryClient.js`: Configuración de React Query para el manejo del estado de las consultas.
- **data**: Contiene datos de respaldo como `data.json` que se utilizan en caso de que la API no responda.

## Tecnologías Utilizadas

- **React Native**: Framework para el desarrollo de aplicaciones móviles.
- **React Query**: Librería para el manejo de consultas y caché de datos.
- **Axios**: Cliente HTTP para realizar peticiones a la API.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
2. Instala las dependencias:
   ```bash
   cd tu-repositorio
   npm install

3. Ejecuta en Android
   ```bash
   npx react-native run-android
3. Ejecuta en iOS
   ```bash
   npx react-native run-ios
## Configuración de Axios :
El archivo axiosConfig.js en la carpeta config contiene la configuración de Axios:

      import axios from 'axios';

      const axiosInstance = axios.create({
      baseURL: 'https://api.tuservicio.com',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
      });

      export default axiosInstance;


## Configuración de React Query
El archivo reactQueryConfig.js en la carpeta config contiene la configuración de React Query:
      ``````
      import { QueryClient } from '@tanstack/react-query';

      const queryClient = new QueryClient();

      export default queryClient;


## Datos de Respaldo

En caso de que la API no responda, la aplicación utilizará datos de respaldo ubicados en la carpeta data/data.json:

      {
      "properties": [
         {
            "id": 1,
            "title": "Propiedad de Ejemplo",
            "location": "Ciudad de Ejemplo",
            "price": 100000,
            "type": "Apartamento",
            ...
         },
         ...
      ]
      }


## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.