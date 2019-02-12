import express, { Application } from 'express';

export default function (app: Application) {
  app.use(express.static('build/public', {
    redirect: false,
  }));
}
