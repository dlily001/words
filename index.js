
var fs = require('fs');

// 引入file json库
var jsonfile = require('jsonfile');

// 定义要扫描的目标文件夹
var pathString = './words-from-the-heart/';

// 用于存放所有心里话
var writePathString = './all_words.json';

// 用于存放格式不正确的json文件名
var errorPathString = './error_data.json';

// 调用fs的readdir函数读取所有文件
fs.readdir(pathString, function(err, files)
{
  if (err) {
    console.log('读取文件失败');
    return;
  }
  console.log(2);
  //把含有"json"字符的文件名过滤出来,把所有文件保存在jsonFiles数组中
 if(files.length>0){
   console.log(files);
  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.json')) {
      jsonFiles.push(files[i]);
    }
  }
  console.log(0);
  console.log(jsonFiles);
  //循环读取json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。
  var jsonList = [];
  console.log(4);
  var errorFiles = [];
  console.log(5);

  for (var i = 0; i < jsonFiles.length; i++) {
       
    try {
      // 读取json文件
      var content = jsonfile.readFileSync(pathString + jsonFiles[i]);
      jsonList.push(content);
    } catch (err) {
      // 如果读取错误就把错误的文件名写入到errorFiles数组内
      errorFiles.push(content);
    }
  }

  console.log(6);
console.log(jsonList);
  // 将收集到的数据写入到一个json文件中
  jsonfile.writeFileSync(writePathString, jsonList);
  console.log(7);

  
    // 将收集到的错误文件写入到一个json文件中
  jsonfile.writeFileSync(errorPathString, errorFiles);
  console.log(8);
}
else {
console.log("meiyouwenjian");
}});
