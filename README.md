# steamer-task-alloyteam

## 任务介绍
此任务是腾讯 AlloyTeam 快速开发流程任务

### 开发
```javascript
steamer task s
// 或
steamer task start

// 任务包括
npm run lint => 代码link
npm run dist => 脚手架编译
git add --all => git 添加所有更新文件
node git-commit.js => git commit
node git-pull.js => git pull
node git.push.js => git push
steamer jb --run => 将代码部署到捷豹平台
```


### 生产环境
```javascript
steamer task d
// 或
steamer task dist
```