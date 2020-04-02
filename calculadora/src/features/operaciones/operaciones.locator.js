let config ={
    locator :{
      7: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[1]',
      8: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[2]',
      9: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[3]',
      4: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[4]',
      5: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[5]',
      6: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[6]',
      3: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[7]',
      2: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[8]',
      1: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[9]',
      0: '//android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[10]',

      btnDelete: '~delete',
      btnDivide: '~divide',
      btnTimes: '~times',
      btnMinus: '~minus',
      btnPlus: '~plus',
      btnEquals: '~equals',

      txtResult:'//android.widget.RelativeLayout/android.widget.EditText[2]'
    }
}

module.exports ={
  config:config,
  locator: config.locator
}
