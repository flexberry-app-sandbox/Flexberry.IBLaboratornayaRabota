import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  рабОтдел: DS.belongsTo('i-i-s-i-b-laboratornaya-rabota-раб-отдел', { inverse: null, async: false }),
  спрСотр: DS.belongsTo('i-i-s-i-b-laboratornaya-rabota-спр-сотр', { inverse: null, async: false }),
  тчОпрПотрТз: DS.hasMany('i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз', { inverse: 'опрПотрТз', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-опр-потр-тз.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  рабОтдел: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-опр-потр-тз.validations.рабОтдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-опр-потр-тз.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчОпрПотрТз: {
    descriptionKey: 'models.i-i-s-i-b-laboratornaya-rabota-опр-потр-тз.validations.тчОпрПотрТз.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОпрПотрТзE', 'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз', {
    дата: attr('Дата создания', { index: 0 }),
    спрСотр: belongsTo('i-i-s-i-b-laboratornaya-rabota-спр-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 2 })
    }, { index: 1 }),
    рабОтдел: belongsTo('i-i-s-i-b-laboratornaya-rabota-раб-отдел', 'Рабочий отдел', {
      наименование: attr('Рабочий отдел', { index: 4 })
    }, { index: 3 }),
    тчОпрПотрТз: hasMany('i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз', 'Табличная часть определение потребностей технической защиты', {
      наимТз: attr('Наименование технической защиты', { index: 0 }),
      опТз: attr('Описание технической защиты', { index: 1 })
    })
  });

  modelClass.defineProjection('ОпрПотрТзL', 'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз', {
    дата: attr('Дата сотрудник', { index: 0 }),
    спрСотр: belongsTo('i-i-s-i-b-laboratornaya-rabota-спр-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 1 })
    }, { index: -1, hidden: true }),
    рабОтдел: belongsTo('i-i-s-i-b-laboratornaya-rabota-раб-отдел', 'Рабочий отдел', {
      наименование: attr('Рабочий отдел', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
