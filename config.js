import './utils/polyfill'
const { miniProgram: { envVersion } } = wx.getAccountInfoSync();

console.log('envVersion', envVersion)

const maps = new Map()
maps.set('develop', 'http://118.89.109.203')

const config = {
    baseUrl: maps.get(envVersion)
}

export default config
