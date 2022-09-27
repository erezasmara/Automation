const config = {
  testTimeout: 100000, // one minute timeout for all tests
  verbose: true,
  // maxWorkers:1,
  roots: [
    "../tests" // tests includes on this directory
  ],
  reporters: [ //reporter config
    "default",
    ["jest-html-reporters", {
      publicPath: "./html-report",
      filename: "report.html",
      openReport: true,
      expand: true,
      hideIcon:true,
      logoImgPath:"./Qualitest.ico",
      pageTitle:"Qualitest Group",
      customInfos:[ {title: 'Project', value: 'Learning propose'}]
    }]
  ]
};

module.exports = config;