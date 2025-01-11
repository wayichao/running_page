interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Yichao Running Page',
  siteUrl: 'https://wayichao.github.io/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'This is a configable description',
  navLinks: [
    {
      name: 'yihong\'s Blog',
      url: 'https://github.com/yihong0618/gitblog',
    },
    {
      name: 'About to README-CN',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
