const { deployTencentLayer, overrideLayerVersion } = require('../../../lib')
const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env')
})
require('dotenv').config()
const fsp = require('fs').promises

console.log(process.env.TENCENT_COS_LAYER_BUCKET)
const ymlOpt = {
  name: 'serverless-layer-deployer-tencent-koa-example',
  inputs: {
    name: 'serverless-layer-deployer-tencent-koa-example-layer',
    region: 'ap-shanghai'
  }
}
;(async () => {
  const { version } = await deployTencentLayer(ymlOpt)
  const serverlessPath = path.resolve(__dirname, 'serverless.js')
  await overrideLayerVersion(version, serverlessPath)
})()
