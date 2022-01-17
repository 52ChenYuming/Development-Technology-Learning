# 协同开发
每次写代码之前 记得 git pull 拉取伙伴的代码

提交代码

如果存在冲突，手动解决冲突，再提交

- 分支 
默认是master（创建仓库就有的分支）

开发过程中可以再创建远程分支（比如：dev）

张三 git clone  dev分支的代码

张三 git push origin dev  朝dev分支提交代码

李四 git clone  dev分支的代码

李四 git push origin dev  朝dev分支提交代码

张三 git pull origin dev 拉取dev分支的代码

......

张三和李四的组长，会将他们在dev分支上提交的代码合并到仓库的master分支上



# 组件通信
父 -> 子   父组件传，子组件通过props接收
子 -> 父   

兄弟组件 -> 兄弟组件
1. eventBus 需要同一个vue实例对象，借助 $emit，$on方法，实现两个组件之间的数据传送

2. 如果项目过大，组件通信需求过多，eventBus就反而显得很繁琐，那么我们就希望有一个集中的公共区域来存放需要共享的数据 ---- vuex

3. vuex 实现数据共享
