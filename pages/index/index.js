Page({
  data: {
    //轮播数据
    background: [
      {
        id:"1700030612775",
        url:"https://19125490.s61i.faiusr.com/4/AD0I8qmPCRAEGAAguc2R5QUoqPvZgQIw7gU46AI!900x900.png.webp"
      },
      {
        id:"1700030614074",
        url:"https://th.bing.com/th/id/R.efdf159eb90c8d2ec837266a9f290dc7?rik=EVfdHPCV1r3KmQ&riu=http%3a%2f%2fwww.dianjinkeji.cn%2fdata%2fimages%2fbanner02.jpg&ehk=8Zyyhc7n2Ysl4cBv9A81RsN7pj5npPfd2DzAxECeJlk%3d&risl=&pid=ImgRaw&r=0"
      },
    ],
    //服务范围右侧数据
    service:[
      {
        text:'技术咨询',
        Entext:"consultation",
        url:"https://19125490.s61i.faiusr.com/4/AD0I8qmPCRAEGAAgttOR5QUo5pqb7QQwxgI4mwE.png.webp"
      },
      {
        text:'技术交流',
        Entext:"communication",
        url:"https://19125490.s61i.faiusr.com/4/AD0I8qmPCRAEGAAgt9OR5QUonJfGwQQwxgI4mwE.png.webp"
      },
      {
        text:'运营服务',
        Entext:"Operation Service",
        url:"https://19125490.s61i.faiusr.com/4/AD0I8qmPCRAEGAAguNOR5QUoy77CzgUwxgI4mwE.png.webp"
      },
    ],
    //广告集数据
    advertisement:[
      {
        id:"1700030586688",
        url:"https://19125490.s61i.faiusr.com/4/AD0I8qmPCRAEGAAg-eCR5QUo_vrA8QYwrAU4uAM.png.webp",
        title:"矩阵管家",
        text:"矩阵管家基于抖⾳开放平台搭建⼀站式短视频矩阵营销管理体系,产品通过账号体系、内容赋能体系、数据监管体系、任务考核体系、线索流转体系,为企业提供业务管理上的效率⼯具,提⾼组织⽣产⼒。"
      },
      // {
      //   id:"1700030781928",
      //   url:"https://19125490.s61i.faiusr.com/4/AD0I8qmPCRAEGAAg-OCR5QUo4KzN4AUwrAU4uAM.png.webp",
      //   title:"xxxx",
      //   text:"需求及其背景的透彻理解开始。正确评估和分析这些能力，并将其转化为强有力的品牌战略，是进一步发展的重要基础。"
      // },
    ]
  },
  navigateTOinformation() {
    tt.navigateTo({
      url: "pages/information/information"
    });
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  changeCircular(e) {
    this.setData({
      circular: !this.data.circular
    });
  },
  changeVertical(e) {
    this.setData({
      vertical: !this.data.vertical
    });
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    });
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    });
  },
  animationFinish(e){
    console.log(e.detail);
  },
  transition(e){
    console.log(e.detail);
  }
});
