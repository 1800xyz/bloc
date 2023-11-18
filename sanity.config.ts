import { defineConfig } from 'sanity'; 

import { deskTool } from 'sanity/desk';


const config = defineConfig({

  projectId: 'qzdaaxrh',

  dataset: 'production',

  title: 'bloc news',

  apiVersion: '2023-03-04',

  basePath: '/admin',

  plugins: [deskTool()]

});

export default config;