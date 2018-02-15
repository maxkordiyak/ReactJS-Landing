const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Poppins:400,600,700';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const poppins = new FontFaceObserver('Poppins');

    poppins.load().then(() => {
        document.documentElement.classList.add('poppins')
    });

};

export default Fonts