const shell = require('shelljs')

shell.exec('mongod --dbpath data/db')
shell.exec('git pull')
shell.exec('npm i')
shell.exec('npm run build')
shell.exec('npm run pm2')