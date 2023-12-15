import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I b_ laboratornaya_ rabota',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I b_ laboratornaya_ rabota',
          title: 'I b_ laboratornaya_ rabota'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
