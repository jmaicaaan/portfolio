class RepositoryService {
  constructor($http) {
    "ngInject";
    this._$http = $http;
    this.baseURL = 'http://192.168.1.9:1111';
  };

  getRepositories = () => {
    return this._$http.get(this.baseURL + '/repo/jmaicaaan')
      .then((resp) => resp.data)
      .catch((err) => err);
  };
}

export default RepositoryService;