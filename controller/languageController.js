const { Language } = require("../models")
const { validateLanguage } = require("../validation/languageValidation")

exports.createLanguage = async (req, res) => {
    const { error } = validateLanguage(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const language = await Language.create(req.body);
        res.status(201).send(language);
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getLanguage = async (req, res) => {
    try {
        const language = await Language.findAll();
        res.status(200).send(language)
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getLanguageById = async (req, res) => {
    try {
        const language = await Language.findByPk(req.params.id);
        if (!language) return res.status(404).send("Language not found")
        res.status(200).send(language)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateLanguage = async (req, res) => {
    const { error } = validateLanguage(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const language = await Language.findByPk(req.params.id)
        if (!language) return res.status(404).send("Language not found");
        await language.update(req.body);
        res.status(200).send(language);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteLanguage = async (req, res) => {
    try {
        const language = await Language.findByPk(req.params.id);
        if (!language) return res.status(404).send("Language not found")
        const languageData = language.toJSON();
        await language.destroy();
        res.status(204).send(languageData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};