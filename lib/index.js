'use strict';

const alignMultilineAssignment = require('./align-multiline-assignment');
const assertFailSingleArgument = require('./assert-fail-single-argument');
const assertThrowsArguments = require('./assert-throws-arguments');
const bufferConstructor = require('./buffer-constructor');
const newWithError = require('./new-with-error');
const noLetInForDeclaration = require('./no-let-in-for-declaration');
const preferAssertIfError = require('./prefer-assert-iferror');
const preferAssertMethods = require('./prefer-assert-methods');
const requireBuffer = require('./require-buffer');
const requiredModules = require('./required-modules');
const timerArguments = require('./timer-arguments');


module.exports = {
  rules: {
    'align-multiline-assignment': alignMultilineAssignment,
    'assert-fail-single-argument': assertFailSingleArgument,
    'assert-throws-arguments': assertThrowsArguments,
    'buffer-constructor': bufferConstructor,
    'new-with-error': newWithError,
    'no-let-in-for-declaration': noLetInForDeclaration,
    'prefer-assert-iferror': preferAssertIfError,
    'prefer-assert-methods': preferAssertMethods,
    'require-buffer': requireBuffer,
    'required-modules': requiredModules,
    'timer-arguments': timerArguments
  }
};
