// transpile:mocha

import { PullRequests } from '../..';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

describe('pull requests', () => {
  it('should-work',async () => {
    let pr = new PullRequests();
    let pulls = await pr.getAll('all');
    console.log(pulls);
  });
});

