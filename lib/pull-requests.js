import request from 'request-promise';
import _ from 'lodash';
import path from 'path';
import { fs } from 'appium-support';


class PullRequests {
  constructor () {
    this.defaultOptions = {
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
  }


}

export default PullRequests;
