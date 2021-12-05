// curl -X POST -v localhost:8002/users   status 201
// curl -X POST -v localhost:8002/users123      bad request = err404
// curl -v localhost:8002   list of Users, status 200
// curl --data '{"name":"xyz","password":"xyz"}' -v localhost:8000/users
