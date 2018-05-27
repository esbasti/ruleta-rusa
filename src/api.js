const baseAPI = '/api';

const partidosAPI = {
  getPartidos() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/partidos`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
        });
    },

  validateCodigo(estado) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/codigos`, {
        method: "POST",
        body: JSON.stringify(estado),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
      });
  },

  cambiarEstadoCodigo(estado) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/codigos`, {
        method: "PATCH",
        body: JSON.stringify(estado),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
      });
  },


  createParticipante(estado){
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/usuarios`, {
        method: "POST",
        body: JSON.stringify(estado),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
      });
  },
  destroy(){}
};

export default partidosAPI;
