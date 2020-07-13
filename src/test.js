import lib from '../index.js';

(async () => {
    try{
        await lib();
    }
    catch (error) {
        console.error(error);
    }
})();