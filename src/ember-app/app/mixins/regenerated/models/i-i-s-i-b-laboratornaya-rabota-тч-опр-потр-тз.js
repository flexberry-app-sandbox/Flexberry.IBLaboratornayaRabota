import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наимТз: DS.attr('string'),
  опТз: DS.attr('string'),
  опрПотрТз: DS.belongsTo('i-i-s-i-b-laboratornaya-rabota-опр-потр-тз', { inverse: 'тчОпрПотрТз', async: false })
});

export let ValidationRules = {
  наимТз: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз.validations.наимТз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  опТз: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз.validations.опТз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  опрПотрТз: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз.validations.опрПотрТз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчОпрПотрТзE', 'i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз', {
    наимТз: attr('Наименование технической защиты', { index: 0 }),
    опТз: attr('Описание технической защиты', { index: 1 })
  });
};
