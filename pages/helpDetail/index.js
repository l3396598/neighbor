const { showToast, getNavbarInfo } = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tmp: 'http://oss.cogo.club/a34dd613-2323-427b-803d-ccacf498de35.png',
    status: null,
    type: null,
    masks: {
      isShowHelpOther: false,
      isShowWriteAnswer: false,
      isShowTextArea: false,
      navBarType: 'location'
    },
    placeHolderStyle: 'font-size: 32rpx;font-weight: 400;color: rgba(0, 0, 0, 0.25);',
    answer: '',
    time: null,
    address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type = 'write'
    const status = 'yibangzhu'
    const { allHeight } = getNavbarInfo()
  },
  accept () {
    showToast('接受本次应助的接口')
  },

  hideHelpOtherMask () {
    this.setData({
      'masks.isShowHelpOther': false,
      'masks.navBarType': 'location',
    })
  },

  toHelpOther () {
    this.setData({
      'masks.isShowHelpOther': true,
      'masks.navBarType': 'custom',
    })
  },

  openWriteAnswerMask () {
    this.selectComponent('#mask').show(this.setData.bind(this, { 'masks.isShowTextArea': true }))
  },

  // 写回答
  writeAnswer () {
    let { answer } = this.data
    answer = answer.trim()
    if (answer == ''){
      showToast('请输入回答内容')
      this.setData({ answer })
      return
    }
    wx.showToast({
      title: '应助成功',
      icon: 'success',
      duration: 2000
    })
    this.cancelWriteAnswerMask()
  },
  cancelWriteAnswerMask () {
    this.selectComponent('#mask').hide(this.setData.bind(this, { 'masks.isShowTextArea': false }))
  },
  save (e) {
    console.log('--------------', this.data)
    this.setData({
      'masks.isShowHelpOther': false
    })
  }
})