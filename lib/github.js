

async getAll (repo = 'all') {
  let repos;
  if (repo === 'all') {
    // get all the repos
    let file = path.resolve(__dirname, '..', '..', 'repos.json');
    let j = JSON.parse(await fs.readFile(file, 'utf8'));
    repos = j.repos;
  } else {
    repos = [repo];
  }

  let pulls = {};
  for (let r of repos) {
    let options = _.defaults({
      uri: `https://api.github.com/repos/appium/${r}/pulls`
    }, this.defaultOptions);
    pulls[r] = await request(options);
  }

  return pulls;
}
