import express from 'express';
const express = require('express');
const cors = require('cors');
const { createServer: createViteServer } = require('vite');

async function createServer() {
  const app = express();
  
  // Habilitar CORS
  app.use(cors());

  // Crear servidor Vite en modo middleware
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  app.use(vite.middlewares);

  // Manejar la ruta /api/chat
  app.post('/api/chat', (req, res) => {
    res.json({ message: 'Chat endpoint reached successfully' });
  });

  // Manejar todas las demás rutas con Vite
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = await vite.transformIndexHtml(url, '');
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();

