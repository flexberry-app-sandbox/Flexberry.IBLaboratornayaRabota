import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назвМер: DS.attr('string'),
  описМер: DS.attr('string'),
  прКомпРеш: DS.belongsTo('i-i-s-i-b-laboratornaya-rabota-пр-комп-реш', { inverse: 'тЧПрКомпРеш', async: false })
});

export let ValidationRules = {
  назвМер: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш.validations.назвМер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описМер: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш.validations.описМер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  прКомпРеш: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш.validations.прКомпРеш.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПрКомпРешE', 'i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш', {
    назвМер: attr('Название мероприятия', { index: 0 }),
    описМер: attr('Описание мероприятия', { index: 1 })
  });
};
