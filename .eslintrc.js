module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "__basedir": "writable",
        "__appProperties": "writable",
        "__faker": "writable",
        "__cache": "writable",
        "__lmsUrl": "writable",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }};