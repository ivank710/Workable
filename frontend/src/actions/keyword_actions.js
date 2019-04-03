import * as KeywordAPIUtil from '../util/keywords_util';
import axios from 'axios';
export const RECEIVE_SAVED_KEYWORDS = 'RECEIVE_SAVED_KEYWORDS';

const receiveSavedKeywords = (keywords) => ({
  type: RECEIVE_SAVED_KEYWORDS,
  keywords
});

export const fetchKeywords = () => dispatch => (
  KeywordAPIUtil.fetchKeywords().then(jobs => dispatch(receiveSavedKeywords(jobs)))
);
