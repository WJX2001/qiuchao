import { Button, Form, Space, Steps } from 'antd'
import type { FormProps } from 'antd/lib/form'
import type { StepProps } from 'antd/lib/steps'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'

import './index.less'

interface IStepItem {
  step: number
  comp: JSX.Element
}

export interface MSStepsFormProps {
  className?: string
  steps: StepProps[]
  loading: boolean
  formOptions: FormProps
  formRef: React.MutableRefObject<any>
  onSubmit: (values: Record<string, any>) => void
  onCancel: () => void
}

interface StepFormInterface extends React.FC<MSStepsFormProps> {
  StepForm: React.FC<{}>
}

const MSStepsForm: StepFormInterface = (props) => {
  const {
    formRef,
    children,
    className,
    loading,
    steps = [],
    formOptions,
    onSubmit,
    onCancel,
  } = props

  const [form] = Form.useForm()

  // 临时写法，后续看下stepsForm的源码优化下
  formRef.current = form

  const [step, setStep] = useState(1)

  const formData = useRef({})

  const steplist: IStepItem[] = []

  React.Children.forEach(children, (item, index) => {
    if (
      React.isValidElement(item) &&
      (item.type as React.FC).displayName === 'StepForm'
    ) {
      steplist.push({ comp: item, step: index + 1 })
    }
  })

  const next = () => {
    form.validateFields().then((values) => {
      setStep(step + 1)
      formData.current = { ...formData.current, ...values }
    })
  }

  const prev = () => {
    setStep(step - 1)
  }

  const cancel = () => {
    onCancel()
  }

  const onFinish = () => {
    form.validateFields().then((values) => {
      onSubmit({ ...formData.current, ...values })
    })
  }

  // 检验children

  // 检验steps数和StepForms是否一致

  return (
    <div className="steps_form_con">
      <Steps
        labelPlacement="vertical"
        items={steps.map((item, index) => ({
          ...item,
          status: step >= index + 1 ? 'process' : 'wait',
        }))}
      />
      <div className="form_wrapper">
        <Form form={form} {...formOptions} onFinish={onFinish}>
          <div>{steplist.find((item) => step === item.step)?.comp}</div>

          <div className="button_footer">
            <Space>
              {step > 1 && <Button onClick={() => prev()}>上一步</Button>}
              {step < steps.length && (
                <Button
                  style={{ margin: '0 8px' }}
                  type="primary"
                  onClick={() => next()}>
                  下一步
                </Button>
              )}
              {step === steps.length && (
                <Button
                  type="primary"
                  style={{ margin: '0 8px' }}
                  htmlType="submit"
                  loading={loading}>
                  确定
                </Button>
              )}
              <Button type="dashed" onClick={() => cancel()}>
                取消
              </Button>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  )
}

const StepForm: React.FC<{}> = (props) => {
  const { children } = props
  return <>{children}</>
}

StepForm.displayName = 'StepForm'
MSStepsForm.StepForm = StepForm

export default MSStepsForm
