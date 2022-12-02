import languages from '../constants/constant.js';

export const getLanguages = async function getLanguages(req, res) {
    res.json(languages);
};
