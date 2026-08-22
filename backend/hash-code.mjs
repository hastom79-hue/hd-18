import crypto from 'node:crypto';
import readline from 'node:readline/promises';
import {stdin as input,stdout as output} from 'node:process';

const rl=readline.createInterface({input,output});
const code=(await rl.question('New MASTER code (6-12 digits): ')).trim();
rl.close();
if(!/^\d{6,12}$/.test(code)){
  console.error('Code must be 6-12 digits.');
  process.exit(1);
}
const salt=crypto.randomBytes(16);
const hash=crypto.pbkdf2Sync(code,salt,310000,32,'sha256');
console.log('\nSet these as server environment variables:');
console.log(`MASTER_CODE_SALT=${salt.toString('base64')}`);
console.log(`MASTER_CODE_HASH=${hash.toString('base64')}`);
