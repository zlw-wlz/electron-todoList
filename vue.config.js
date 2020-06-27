module.exports={
  chainWebpack:config=>{
    config.entry('app').clear().add('./src/render/main.js')
  },
  devServer:{
    hotOnly:true
  }
}