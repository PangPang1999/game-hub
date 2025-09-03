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

## 4. 设置布局

**布局规划：**

- 小屏幕（1280 以下）：顶部是 Nav 导航，底部是 Main 内容
- 大屏幕：顶部是 Nav 导航，底部左侧为 Aside 侧边栏，底部右侧为 Main 内容

**实现方式：**

- 使用 **templateAreas** 定义不同屏幕尺寸下的布局区域
- 控制组件显示/隐藏：

  - 旧版本（v2）通过 `show` 和 `above`，现已废除
  - 新版本（v3）每个组件都提供 `hideBelow` 和 `hideFrom` 属性
    - `hideBelow="sm"`：在 sm 以下隐藏
    - `hideFrom="md"`：从 md 开始隐藏

**参考地址**

- [Chakra 相应式布局官方文档](https://chakra-ui.com/docs/styling/responsive-design)

## 5. 初步设置导航栏

**组件结构：**

- 创建 `src/components/NavBar.tsx` 组件
- 使用 Chakra UI 的 `HStack` 进行水平布局
- 添加项目 logo 图片（60px 尺寸）
- 显示导航栏文本标识

**实现要点：**

- 导入 logo 图片资源：`import logo from "../assets/logo.webp"`
- 使用 `HStack` 组件实现水平排列
- 使用 `Image` 组件显示 logo，设置 `boxSize="60px"`
- 使用 `Text` 组件显示导航栏文本

## 6. 设置黑暗/明亮主题切换

**功能实现：**

- 在导航栏右侧添加主题切换开关
- 支持明亮/黑暗模式动态切换
- 使用 Switch 组件替代传统的 IconButton 按钮

**技术要点：**

- 使用 `useColorMode` Hook 管理主题状态
- 创建独立的 `ColorModeSwitch` 组件
- 使用 Chakra UI v3 的 Switch 组件结构
- 设置绿色主题色 `colorPalette="green"`
- 通过 `checked` 属性绑定当前主题状态
- 使用 `onCheckedChange` 处理切换事件

**实现说明：**

- 文档地址：https://chakra-ui.com/docs/components/concepts/color-mode
- Vite 项目为纯客户端渲染（CSR），无需使用 `ClientOnly` 组件
- Chakra UI v3 中 Switch 组件的 API 结构有所调整
- 原始样式有限，Switch 开关模式提供更好的用户体验
