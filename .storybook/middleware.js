const express = require('express');

const expressMiddleWare = router => {
    router.use(express.json());
}
module.exports = expressMiddleWare;