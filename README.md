# 第三帝国兴亡史 - 历史教育网站

一个关于纳粹德国从崛起到毁灭的历史教育静态网站，涵盖历史时间线、关键人物传记、主要战役分析和历史遗产反思。

## 技术栈

- **前端：** HTML5 + CSS3 + JavaScript（原生，无框架依赖）
- **服务器：** Nginx
- **版本控制：** Git + GitHub

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/Mengye-Jiuzuo/third-reich.git
```

### 2. 使用 Nginx 部署

修改 nginx.conf，将 root 指向项目目录：

```nginx
location / {
    root   /path/to/third-reich;
    index  index.html;
}
```

### 3. 启动 Nginx

```bash
nginx -p /path/to/nginx
```

浏览器访问 `http://localhost` 即可查看。

## 功能特性

- 响应式布局，适配桌面和移动端
- 时间线交互（点击事件切换地图和描述）
- 人物分类浏览（元首、帝国领导层、党卫军、将领等）
- 战役详情页（时间轴概览、兵力对比条、阶段导航）
- 背景音乐播放器
- 暗黑历史风格 UI

## 项目结构

```
third-reich/
├── index.html          # 首页
├── pages/              # 子页面
│   ├── history.html    # 历史时间线
│   ├── figures.html    # 人物
│   ├── battles.html    # 战役
│   └── legacy.html     # 遗产
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── app.js          # 全局脚本
└── assets/             # 静态资源
    ├── images/         # 图片
    └── music/          # 背景音乐
```

## 目的

本网站仅供教育和历史研究目的，帮助人们了解这段历史并从中吸取教训。
