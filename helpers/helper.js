const fs = require('fs');
const TokenGenerator = require('uuid-token-generator');
const file = require('../data/users.json');
const cloudinary = require('../helpers/cloudinary.config');

const getNewId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  }
  return 1;
};

const newDate = () => new Date().toString();

// function mustBeInArray(array, id) {
//   return new Promise((resolve, reject) => {
//     const row = array.find(r => r.id === id);
//     if (!row) {
//       reject({
//         message: err,
//         status: 404,
//       });
//     }
//     resolve(row);
//   });
// }

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

const tokenGen = () => {
  const tokgen = new TokenGenerator();
  return tokgen.generate();
};

function checkEmailIndex(email) {
  const js = JSON.parse(file);
  let key = 0;
  const emailKey = js.forEach((item, index) => {
    if (item.email === email) {
      key = index;
    }
    return key;
  });

  if (emailKey) {
    return emailKey;
  }
  return 'Not found';


  // TODO create a function to search for duplicate email. email must be unique;
}

function uploadPic(path) {
  cloudinary.uploader.upload(path, (error, result) => {
    console.log(result, error);
  });
}


module.exports = {
  getNewId,
  newDate,
  // mustBeInArray,
  tokenGen,
  writeJSONFile,
  checkEmailIndex,
  uploadPic,
};
