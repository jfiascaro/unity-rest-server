const { response } = require('express');

const getUser = (req, res = response) => {
    const query = req.query; //Query Opcionales
    console.log('GET', req.body);
    res.json({
        status: true,
        msg: 'get response',
        query
    })
}


const postUser = (req, res) => {   
    console.log('POST', req.body);

    const body = req.body;

    res.json({
        status: true,
        msg: 'post NEW',
        body
    })
  }

const putUser = (req, res) => {
    const id = req.params.id; //Párametros indicados en la Ruta
    console.log('REQ', id);
    console.log('PUT', req.body);
    res.json({
        status: true,
        msg: 'put',
        id
    })
  }

const deleteUser = (req, res) => {
    console.log('DELETE', req.body);
    res.json({
        status: true,
        msg: 'delete'
    })
  }

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}