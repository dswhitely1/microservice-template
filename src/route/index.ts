import controller from '../controller';

export default [
  {
    path: '/_sanity',
    method: 'get',
    handler: controller.sanityCheck,
  },
];
