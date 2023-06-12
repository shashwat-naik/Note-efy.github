/**
 * Get /
 * Homepage
 */
exports.homepage = async (req, res) => {
    const locals = {
        title: 'Note-efy',
        description: 'Free notes taking App',
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * Get /
 * About
 */
exports.about = async (req, res) => {
    const locals = {
        title: 'About - Note-efy',
        description: 'Free notes taking App',
    }
    res.render('about', locals);
}

