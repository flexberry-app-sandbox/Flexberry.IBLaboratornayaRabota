import {
  defineNamespace,
  defineProjections,
  Model as РабОтделMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-раб-отдел';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РабОтделMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
