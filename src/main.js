const path = require('path');
const os = require('os');
const bokestsHome = process.cwd(),userHome = os.homedir(),tmpDir = os.tmpdir();

const fileSystem = {
  projectPath: '',
  setProjectPath(path) {
	fileSystem.projectPath = path;
  },
  getUserDataPath(options) {
	  let defaultOpts = {
		autoCreate: true
	  };
	  let myOpts = Object.assign(defaultOpts, options);
	  if(myOpts.autoCreate){
		  // todo 不存在需要创建
	  }
	  return path.join(bokestsHome, 'userData');
  },
  getWinUserDataPath(options) {
	  return path.join(userHome, '.BOKESTS');
  },
  getWinTempPath(options) {
	  return path.join(tmpDir, 'BOKESTS');
  },
  getHistoryLogFilePath(options){ // 获取历史文件路径
	  return path.join(fileSystem.getWinUserDataPath(), 'history-log.json');
  },
  getWinCacheBokeStsPath(options){ // 获取本地缓存的json路径
	  return path.join(fileSystem.getWinUserDataPath(), 'bokests.json');
  },
  getAppPath(appCode, options){
	  // todo
	  // fileSystem.getProjectPath()
  },
  getSchemaPath(appCode, schemeCode, options){
	  // todo
	  // fileSystem.getAppPath(appCode)
  }
};

module.exports = fileSystem;