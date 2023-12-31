import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
// import classNames from 'classnames'
import './styles/index.scss'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
const prefixClass = 'input'
// // 注意：因为InputHTMLAttributes里已经有size属性，会导致类型不匹配Omit可以忽略第二个参数的值
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**labelName */
  labelName?: string;
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  // icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'liangship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: FC<InputProps> = (props) => {
  const { labelName } = props;
  // const {
  //   disabled,
  //   size,
  //   icon,
  //   prepend,
  //   append,
  //   style,
  //   ...restProps
  // } = props
  // const cnames = classNames('input-wrapper', {
  //   [`input-size-${size}`]: size,
  //   'is-disabled': disabled,
  //   'input-group': prepend || append,
  //   'input-group-append': !!append,
  //   'input-group-prepend': !!prepend
  // })
  // // 避免受控组件转向非受控组件报错
  // const fixControlledValue = (value: any) => {
  //   if (typeof value === 'undefined' || value === null) {
  //     return ''
  //   }
  //   return value
  // }
  // // value与defultValue不能同时存在与一个组件上
  // if('value' in props) {
  //   delete restProps.defaultValue
  //   restProps.value = fixControlledValue(props.value)
  // }
  return (
    // <div className={cnames} style={style}>
    //   {prepend && <div className="input-group-prepend">{prepend}</div>}
    //   {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
    //   <input
    //     className="input-inner"
    //     disabled={disabled}
    //     {...restProps}
    //   />
    //   {append && <div className="input-group-append">{append}</div>}
    // </div>
    <div className={prefixClass}>
      <input />
      <label className='placeholder'>
        {labelName}
      </label>
    </div>
  )
}

export default Input;
