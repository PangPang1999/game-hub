# GameHub 项目笔记

## 1. 初始化项目

**步骤：**

1. 使用 Vite 创建 React + TypeScript 项目（版本 7）：

   ```bash
   npm create vite@latest
   ```

   - 项目名称：`game-hub`
   - 框架：`React`
   - 语言：`TypeScript`

2. 进入目录并安装依赖：

   ```bash
   cd game-hub
   npm install
   ```

3. 启动开发服务器：

   ```bash
   npm run dev
   ```

## 2. Git 仓库配置

1. 初始化 Git 仓库并提交初始代码：

   ```bash
   git init
   git add .
   git commit -m "Initial Commit"
   ```

2. 关联远程仓库（GitHub）：

   ```bash
   git remote add origin https://github.com/PangPang1999/game-hub.git
   git branch -M main
   git push -u origin main
   ```

## 3. 设置 UI 框架

本项目使用 **Chakra UI v3** 作为 UI 库。

- 官方文档地址：[https://chakra-ui.com](https://chakra-ui.com)

**安装：**

1. 打开 [Chakra UI 官网](https://chakra-ui.com)。
2. 点击 **Start Building**，在 **Framework Guide** 中选择 **Vite**。
3. 根据官方导航执行安装命令
