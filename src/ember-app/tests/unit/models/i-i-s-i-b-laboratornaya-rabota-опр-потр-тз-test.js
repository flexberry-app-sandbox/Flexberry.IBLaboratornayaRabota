import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-b-laboratornaya-rabota-опр-потр-тз', 'Unit | Model | i-i-s-i-b-laboratornaya-rabota-опр-потр-тз', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-b-laboratornaya-rabota-должность',
    'model:i-i-s-i-b-laboratornaya-rabota-опр-потр-тз',
    'model:i-i-s-i-b-laboratornaya-rabota-пр-комп-реш',
    'model:i-i-s-i-b-laboratornaya-rabota-раб-отдел',
    'model:i-i-s-i-b-laboratornaya-rabota-спр-сотр',
    'model:i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш',
    'model:i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
