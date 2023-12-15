import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-b-laboratornaya-rabota-должность-l');
  this.route('i-i-s-i-b-laboratornaya-rabota-должность-e',
  { path: 'i-i-s-i-b-laboratornaya-rabota-должность-e/:id' });
  this.route('i-i-s-i-b-laboratornaya-rabota-должность-e.new',
  { path: 'i-i-s-i-b-laboratornaya-rabota-должность-e/new' });
  this.route('i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-l');
  this.route('i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-e',
  { path: 'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-e/:id' });
  this.route('i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-e.new',
  { path: 'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-e/new' });
  this.route('i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-l');
  this.route('i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-e',
  { path: 'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-e/:id' });
  this.route('i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-e.new',
  { path: 'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-e/new' });
  this.route('i-i-s-i-b-laboratornaya-rabota-раб-отдел-l');
  this.route('i-i-s-i-b-laboratornaya-rabota-раб-отдел-e',
  { path: 'i-i-s-i-b-laboratornaya-rabota-раб-отдел-e/:id' });
  this.route('i-i-s-i-b-laboratornaya-rabota-раб-отдел-e.new',
  { path: 'i-i-s-i-b-laboratornaya-rabota-раб-отдел-e/new' });
  this.route('i-i-s-i-b-laboratornaya-rabota-спр-сотр-l');
  this.route('i-i-s-i-b-laboratornaya-rabota-спр-сотр-e',
  { path: 'i-i-s-i-b-laboratornaya-rabota-спр-сотр-e/:id' });
  this.route('i-i-s-i-b-laboratornaya-rabota-спр-сотр-e.new',
  { path: 'i-i-s-i-b-laboratornaya-rabota-спр-сотр-e/new' });
});

export default Router;
