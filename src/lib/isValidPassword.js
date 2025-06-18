export function isValisPassword(text) {
    const minSize = 12;
    const maxSize = 100;

    if (typeof text !== 'string') {
        return [true, 'Slaptazodis turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, 'Slaptazodis turi tureti ne maziau 12 simboliu'];
    }

    if (text.length > maxSize) {
        return [true, 'Slaptazodis turi tureti ne daugiau 100 simboliu'];
    }

    return [false, ''];
}