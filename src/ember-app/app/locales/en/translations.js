import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISIB_Laboratornaya_RabotaДолжностьLForm from './forms/i-i-s-i-b-laboratornaya-rabota-должность-l';
import IISIB_Laboratornaya_RabotaОпрПотрТзLForm from './forms/i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-l';
import IISIB_Laboratornaya_RabotaПрКомпРешLForm from './forms/i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-l';
import IISIB_Laboratornaya_RabotaРабОтделLForm from './forms/i-i-s-i-b-laboratornaya-rabota-раб-отдел-l';
import IISIB_Laboratornaya_RabotaСпрСотрLForm from './forms/i-i-s-i-b-laboratornaya-rabota-спр-сотр-l';
import IISIB_Laboratornaya_RabotaДолжностьEForm from './forms/i-i-s-i-b-laboratornaya-rabota-должность-e';
import IISIB_Laboratornaya_RabotaОпрПотрТзEForm from './forms/i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-e';
import IISIB_Laboratornaya_RabotaПрКомпРешEForm from './forms/i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-e';
import IISIB_Laboratornaya_RabotaРабОтделEForm from './forms/i-i-s-i-b-laboratornaya-rabota-раб-отдел-e';
import IISIB_Laboratornaya_RabotaСпрСотрEForm from './forms/i-i-s-i-b-laboratornaya-rabota-спр-сотр-e';
import IISIB_Laboratornaya_RabotaДолжностьModel from './models/i-i-s-i-b-laboratornaya-rabota-должность';
import IISIB_Laboratornaya_RabotaОпрПотрТзModel from './models/i-i-s-i-b-laboratornaya-rabota-опр-потр-тз';
import IISIB_Laboratornaya_RabotaПрКомпРешModel from './models/i-i-s-i-b-laboratornaya-rabota-пр-комп-реш';
import IISIB_Laboratornaya_RabotaРабОтделModel from './models/i-i-s-i-b-laboratornaya-rabota-раб-отдел';
import IISIB_Laboratornaya_RabotaСпрСотрModel from './models/i-i-s-i-b-laboratornaya-rabota-спр-сотр';
import IISIB_Laboratornaya_RabotaТЧПрКомпРешModel from './models/i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш';
import IISIB_Laboratornaya_RabotaТчОпрПотрТзModel from './models/i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-b-laboratornaya-rabota-должность': IISIB_Laboratornaya_RabotaДолжностьModel,
    'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз': IISIB_Laboratornaya_RabotaОпрПотрТзModel,
    'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш': IISIB_Laboratornaya_RabotaПрКомпРешModel,
    'i-i-s-i-b-laboratornaya-rabota-раб-отдел': IISIB_Laboratornaya_RabotaРабОтделModel,
    'i-i-s-i-b-laboratornaya-rabota-спр-сотр': IISIB_Laboratornaya_RabotaСпрСотрModel,
    'i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш': IISIB_Laboratornaya_RabotaТЧПрКомпРешModel,
    'i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз': IISIB_Laboratornaya_RabotaТчОпрПотрТзModel
  },

  'application-name': 'I b_ laboratornaya_ rabota',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I b_ laboratornaya_ rabota',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I b_ laboratornaya_ rabota',
          title: 'I b_ laboratornaya_ rabota'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-b-laboratornaya-rabota': {
          caption: 'IB_Laboratornaya_Rabota',
          title: 'IB_Laboratornaya_Rabota',
          'i-i-s-i-b-laboratornaya-rabota-спр-сотр-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-l': {
            caption: 'Проектирование комплексного решения',
            title: ''
          },
          'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-l': {
            caption: 'Определение потребностей технической защиты',
            title: ''
          },
          'i-i-s-i-b-laboratornaya-rabota-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-i-b-laboratornaya-rabota-раб-отдел-l': {
            caption: 'Рабочий отдел',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-b-laboratornaya-rabota-должность-l': IISIB_Laboratornaya_RabotaДолжностьLForm,
    'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-l': IISIB_Laboratornaya_RabotaОпрПотрТзLForm,
    'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-l': IISIB_Laboratornaya_RabotaПрКомпРешLForm,
    'i-i-s-i-b-laboratornaya-rabota-раб-отдел-l': IISIB_Laboratornaya_RabotaРабОтделLForm,
    'i-i-s-i-b-laboratornaya-rabota-спр-сотр-l': IISIB_Laboratornaya_RabotaСпрСотрLForm,
    'i-i-s-i-b-laboratornaya-rabota-должность-e': IISIB_Laboratornaya_RabotaДолжностьEForm,
    'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-e': IISIB_Laboratornaya_RabotaОпрПотрТзEForm,
    'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-e': IISIB_Laboratornaya_RabotaПрКомпРешEForm,
    'i-i-s-i-b-laboratornaya-rabota-раб-отдел-e': IISIB_Laboratornaya_RabotaРабОтделEForm,
    'i-i-s-i-b-laboratornaya-rabota-спр-сотр-e': IISIB_Laboratornaya_RabotaСпрСотрEForm
  },

});

export default translations;
