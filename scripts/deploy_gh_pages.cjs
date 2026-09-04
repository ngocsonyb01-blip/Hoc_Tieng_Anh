const cp = require('child_process');
const fs = require('fs');
const path = require('path');

const tempIndex = path.join(process.cwd(), '.git', 'temp_gh_index');
if (fs.existsSync(tempIndex)) fs.unlinkSync(tempIndex);

const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  console.log('Building project first...');
  cp.execSync('npm run build', { stdio: 'inherit' });
}

const env = { ...process.env, GIT_INDEX_FILE: tempIndex, GIT_WORK_TREE: distDir };
cp.execSync('git add -A', { env, stdio: 'inherit' });
const tree = cp.execSync('git write-tree', { env }).toString().trim();
console.log('Tree hash:', tree);

const commit = cp.execSync(`git commit-tree ${tree} -m "Deploy dist with authentic Exam 07 to gh-pages"`, { env }).toString().trim();
console.log('Commit hash:', commit);

cp.execSync(`git update-ref refs/heads/gh-pages ${commit}`, { stdio: 'inherit' });
if (fs.existsSync(tempIndex)) fs.unlinkSync(tempIndex);

cp.execSync('git push origin gh-pages --force', { stdio: 'inherit' });
console.log('Successfully deployed to origin/gh-pages!');
