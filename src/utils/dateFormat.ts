import moment from 'moment';

export default (date: Date) => moment(date).format('YYYY年MM月DD日 HH:mm');
