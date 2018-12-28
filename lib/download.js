const download = require('download-git-repo')
const path = require('path')

module.exports = function (target) {
  target = target || "nobita-demo";
  return new Promise(function(resolve, reject){

    download('github:github.com:iamtang/example#master', `./${target}`, function (err) {
      
      console.log(err ? 'Error' : '构建成功');
      resolve(err);
    })
  });
}