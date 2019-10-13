import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';

import ErrorEntity from '@/classes/entities/ErrorEntity';
import ImageEntity from '@/classes/entities/ImageEntity';
import PostEntity from '@/classes/entities/PostEntity';
import UserEntity from '@/classes/entities/UserEntity';

Vue.use(Vuex);

// Create a new instance of Database.
const database = new VuexORM.Database();

const models = [
  ErrorEntity,
  ImageEntity,
  PostEntity,
  UserEntity,
];

// Register Models to Database.
models.forEach((model) => database.register(model));

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
});

export default store;
