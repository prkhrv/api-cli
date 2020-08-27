import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
import execa from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';
import figlet from 'figlet';

const access = promisify(fs.access);
const copy = promisify(ncp);

//Welcome
async function greetUser(){
    console.log(chalk.yellowBright(figlet.textSync('prkhrv')));
    return true;
}

async function copyTemplateFiles(options) {
 return copy(options.templateDirectory, options.targetDirectory, {
   clobber: false,
 });
}

async function initNpm(options) {
    const result = await execa.command('npm init --y', {
      cwd: options.targetDirectory,
    });
    if (result.failed) {
      return Promise.reject(new Error('Failed to initialize git'));
    }
    return;
}

export async function createProject(options) {
 options = {
   ...options,
   targetDirectory: options.targetDirectory || process.cwd(),
 };

 const currentFileUrl = import.meta.url;
 const templateDir = path.resolve(
   new URL(currentFileUrl).pathname,
   '../../templates',
   options.template.toLowerCase()
 );
 options.templateDirectory = templateDir;

 try {
   await access(templateDir, fs.constants.R_OK);
 } catch (err) {
   console.error('%s Invalid template name', chalk.red.bold('ERROR'));
   process.exit(1);
 }

 const tasks = new Listr([
    {
        title:'Greetings',
        task:() => greetUser()

    }, 
    {
        title: 'Initialize npm',
        task: () => initNpm(options),
        enabled: () => options.git,
    },
    {
      title: 'Copy project files',
      task: () => copyTemplateFiles(options),
    },
    {
      title: 'Install dependencies',
      task: () =>
        install({
        'express': undefined,
        'mongoose':undefined,
        'body-parser':undefined,
        }),
      skip: () =>
        !options.runInstall
          ? 'Pass --install to automatically install dependencies'
          : undefined,
    },
  ]);
 
  await tasks.run();
 console.log('%s Project ready', chalk.green.bold('DONE'));
 return true;
}