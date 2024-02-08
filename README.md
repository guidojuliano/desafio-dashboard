This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Inicializar

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Descripción del proyecto

Este proyecto es una aplicación web que permite mostrar diferentes graficos y tablas de un dashboard dependiendo de los filtros seleccionados.

Los datos fueron creados de manera local en la carpeta public/api/data.json, los cuales son consumidos por la aplicación mediante un custom hook.

Los filtros funcionales son:

# GRAFICO

- HOY x Clientes

- 7D x Clientes

- 7D x Clientes/Dinero

- 7D x Clientes/Cashback

- 7D x Transacciones/Dinero

- YTD/YTG x Dinero

# PULSO

- PULSO
