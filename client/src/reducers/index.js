import { combineReducers } from 'redux';

import vinyl from './vinyl'
import auth from './auth'
import bands from './bands'

export default combineReducers({

    vinyl, auth, bands

});