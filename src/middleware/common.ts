import { Router, urlencoded, json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

export const handleHelmet = (router: Router) => router.use(helmet());

export const handleParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};

export const handleCors = (router: Router) => router.use(cors());

export const hanldeCompression = (router: Router) => router.use(compression());
