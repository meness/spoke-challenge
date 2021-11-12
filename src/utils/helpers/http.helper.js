import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const Http = {
  /**
   * Send a request with POST method.
   *
   * @param {string} endpoint
   * @param {object} data
   */
  async post(endpoint, data) {
    return axios.post(endpoint, JSON.stringify(data), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  },

  /**
   * Send a request with GET method
   *
   * @param {string} endpoint
   */
  async get(endpoint) {
    return axios.get(endpoint);
  },

  /**
   * Send a request with DELETE method.
   *
   * @param {string} endpoint
   */
  async delete(endpoint) {
    return axios.delete(endpoint);
  },

  /**
   * Send a request with PUT method.
   *
   * @param {string} endpoint
   * @param {object} data
   */
  async put(endpoint, data) {
    return axios.put(endpoint, JSON.stringify(data), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  },

  /**
   * Send a request with PATCH method.
   *
   * @param {string} endpoint
   * @param {object} data
   */
  async patch(endpoint, data) {
    return axios.patch(endpoint, JSON.stringify(data), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  },
};

export default Http;
