class RepositoryService {
  constructor($http) {
    "ngInject";
    this._$http = $http;
    this.baseURL = 'https://portfolio-server-fcc.herokuapp.com';
  };

  getRepositories = () => {
    return this._$http.get(this.baseURL + '/repo/jmaicaaan')
      .then((resp) => resp.data)
      .catch((err) => err);
  };

  getUserDetails = () => {
    return this._$http.get(this.baseURL + '/user')
      .then((resp) => resp.data)
      .catch((err) => err);
  }
}

export default RepositoryService;