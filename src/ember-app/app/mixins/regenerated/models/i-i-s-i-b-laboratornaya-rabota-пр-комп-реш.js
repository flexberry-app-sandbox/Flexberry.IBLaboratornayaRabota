import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  периодПрДо: DS.attr('date'),
  периодПрОт: DS.attr('date'),
  спрСотр: DS.belongsTo('i-i-s-i-b-laboratornaya-rabota-спр-сотр', { inverse: null, async: false }),
  тЧПрКомпРеш: DS.hasMany('i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш', { inverse: 'прКомпРеш', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-пр-комп-реш.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  периодПрДо: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-пр-комп-реш.validations.периодПрДо.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  периодПрОт: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-пр-комп-реш.validations.периодПрОт.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-пр-комп-реш.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПрКомпРеш: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-пр-комп-реш.validations.тЧПрКомпРеш.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрКомпРешE', 'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш', {
    дата: attr('Дата создания', { index: 0 }),
    периодПрОт: attr('Период проектирования от', { index: 1 }),
    периодПрДо: attr('Период проектирования до', { index: 2 }),
    спрСотр: belongsTo('i-i-s-i-b-laboratornaya-rabota-спр-сотр', 'Ответственный', {
      фио: attr('Ответственный', { index: 4 })
    }, { index: 3 }),
    тЧПрКомпРеш: hasMany('i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш', 'Табличная часть проектирование комплексного решения', {
      назвМер: attr('Название мероприятия', { index: 0 }),
      описМер: attr('Описание мероприятия', { index: 1 })
    })
  });

  modelClass.defineProjection('ПрКомпРешL', 'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш', {
    дата: attr('Дата создания', { index: 0 }),
    периодПрОт: attr('Период проектирования от', { index: 1 }),
    периодПрДо: attr('Период проектирования до', { index: 2 }),
    спрСотр: belongsTo('i-i-s-i-b-laboratornaya-rabota-спр-сотр', 'Ответственный', {
      фио: attr('Ответственный', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
