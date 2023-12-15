import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-i-b-laboratornaya-rabota-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-спр-сотр.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-спр-сотр.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСотрE', 'i-i-s-i-b-laboratornaya-rabota-спр-сотр', {
    фио: attr('Фио сотрудника', { index: 0 }),
    должность: belongsTo('i-i-s-i-b-laboratornaya-rabota-должность', 'Должность', {
      наименование: attr('Должность', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('СпрСотрL', 'i-i-s-i-b-laboratornaya-rabota-спр-сотр', {
    фио: attr('Фио сотрудника', { index: 0 }),
    должность: belongsTo('i-i-s-i-b-laboratornaya-rabota-должность', 'Должность', {
      наименование: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
