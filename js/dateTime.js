import { DateTime } from '../node_modules/luxon/src/luxon.js';

const currentDate = DateTime.now();

const formattedDate = currentDate.toLocaleString(DateTime.DATETIME_MED);

export default formattedDate;
