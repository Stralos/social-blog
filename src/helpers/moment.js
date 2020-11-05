import moment from 'moment';
import localization from 'moment/locale/lt';

moment.updateLocale('lt', localization)

moment.fn.formatDefault = function() {
  return this.format('YYYY MMMM DD');
}

export default moment;