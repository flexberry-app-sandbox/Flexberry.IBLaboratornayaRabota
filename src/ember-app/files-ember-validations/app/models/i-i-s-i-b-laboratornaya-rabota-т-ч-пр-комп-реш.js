import {
  defineNamespace,
  defineProjections,
  Model as ТЧПрКомпРешMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧПрКомпРешMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
