export function isValidUsername(text) {
    const minSize = 3;
    const maxSize = 20;

    if (typeof text !== 'string') {
        return [true, 'Slapyvardis turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, 'Slapyvardis turi buti ne maziau 3 simboliu'];
    }

    if (text.length > maxSize) {
        return [true, 'Slapyvardis turi buti ne daugiau 20 simboliu'];
    }

    if (text.includes(' ')) {
        return [true, 'Slapyvardis negali tureti tarpu'];
    }

    return [false, ''];
}