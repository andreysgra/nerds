'use strict';

const settings = require('../settings');
const { task } = require('gulp');
const del = require('del');

task('clean', () => del(settings.paths.dest.root));
