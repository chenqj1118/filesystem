# filesystem
filesystem 文件系统



## filesystem 私有变量定义

```javascript
// 定义三个底层存储路径
const bokestsHome = process.cwd(),
      userHome = os.homedir(),
      tmpDir = os.tmpdir();
```



## filesystem 属性

| 属性          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| `projectPath` | 返回项目路径，默认为空，打开项目或者创建项目时需要先`setProjectPath()`， 再`getProjectPath()` |
|               |                                                              |
|               |                                                              |
|               |                                                              |
|               |                                                              |



## filesystem 对象方法

| 方法                       | 描述                                 | 备注                                              |
| :------------------------- | :----------------------------------- | ------------------------------------------------- |
| `setProjectPath() `        | 设置项目路径                         | `setProjectPath(path) {this.projectPath = path;}` |
| `getProjectPath() `        | 返回项目路径                         | `getProjectPath(options) {}`                      |
| `getUserDataPath()`        | 返回%process.cwd()%/userData         | `getUserDataPath(options) {}`                     |
| `getWinUserDataPath()`     | 返回`%user%.BOKESTS`                 | `getWinUserDataPath(options) {}`                  |
| `getWinTempPath()`         | 返回系统临时文件路径`%temp%/BOKESTS` | `getWinTempPath(options) {}`                      |
| `getHistoryLogFilePath()`  | 返回历史文件路径                     | `getHistoryLogFilePath(options){}`                |
| `getWinCacheBokeStsPath()` | 返回本地缓存的大json路径(断网时调用) | `getWinCacheBokeStsPath(options){}`               |
| `getAppPath()`             | 返回应用路径                         | `getAppPath(appCode, options){}`                  |
| `getSchemaPath()`          | 返回方案配置路径                     | `getSchemaPath(appCode, schemeCode, options){}`   |
| `getLogPath()`             | 操作日志                             |                                                   |
| `getMvnLogPath()`          | java程序日志                         |                                                   |
| `getJavaLogPath()`         | mvn日志                              |                                                   |
| `getJarPath()`             |                                      |                                                   |
| `getYmlPath()`             | application.yml                      |                                                   |
| `getRunTimePath()`         |                                      |                                                   |
| getJdkPath                 |                                      |                                                   |
| getMvnPath                 |                                      |                                                   |
| getMvnSettingPath          |                                      |                                                   |
| getParentPomPath           |                                      |                                                   |
| getStarterPomPath          |                                      |                                                   |
| getExtPomPath              |                                      |                                                   |
| getLogback-springPath      | logback-spring.xml                   |                                                   |
| getQuartz_jobsPath         | quartz_jobs.xml                      |                                                   |
|                            |                                      |                                                   |

