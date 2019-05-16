import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTag, AtButton, AtTabBar } from 'taro-ui'

import './index.less'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

interface IProps {

}
interface IState {
  current: number,
}

@inject('counterStore')
@observer
class Index extends Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    current: 0,
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }


  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  handleClick = e => {
    console.log(e)
    this.setState({ current : e })
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <AtTag type='primary' circle>标签</AtTag>
        <AtButton>按钮文案</AtButton>
        <AtButton type='primary'>按钮文案</AtButton>
        <AtButton type='secondary'>按钮文案</AtButton> */}

        <iframe src='http://datav.aliyuncs.com/share/d081065571c55c57a5916b1efe181579'></iframe>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'bullet-list' },
            { title: '互动数据', iconType: 'camera' },
            { title: '粉丝数据', iconType: 'folder' }
          ]}
          onClick={e => this.handleClick(e)}
          current={this.state.current }
        />
      </View>
    )
  }
}

export default Index  as ComponentType
