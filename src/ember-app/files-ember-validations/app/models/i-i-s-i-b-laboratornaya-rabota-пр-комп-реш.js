import {
  defineNamespace,
  defineProjections,
  Model as ПрКомпРешMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-пр-комп-реш';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПрКомпРешMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
