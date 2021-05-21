import React from 'react';
import { Form, Input, Select, Switch, DatePicker, Radio, TimePicker, Checkbox, InputNumber, Col, Row, Descriptions } from 'antd';
import moment from 'moment';
// import { withTranslation } from "react-i18next";
import CustomInputMoney from './InputMoney'
const { Option } = Select;
const { TextArea } = Input;

function ConstruirFormularios({ campos, state, setState, form, t, label }) {


    form.setFieldsValue({ ...Object.keys(form.getFieldsValue()), ...state })



    const format = 'h:mm a';

    const dateFormat = 'DD-MM-YYYY';
    const onChange = evt => {
        const { name, value } = evt.target
        const datosActuales = form.getFieldsValue();
        form.setFieldsValue({ ...datosActuales, [name]: value })
        setState({ ...state, [name]: value })
        // console.log(state)
    };


    function handleSelect(value, name) {

        const datosActuales = form.getFieldsValue();
        form.setFieldsValue({ ...datosActuales, [name]: value })
        setState({ ...state, [name]: value })
        // console.log(state)

    }

   
    const switchCase = e => {
        // console.log(e)
        switch (e.type) {
            case 'text':
                return <Input
                    disabled={e.disabled ? true : false}
                    name={e.name}
                    onChange={onChange}
                    value={state[e.name]}
                    readOnly={e.readOnly ? true : false}
                    placeholder={e.placeholder ? e.placeholder : ''}
                    maxLength={e.maxLength && e.maxLength}
                />
            case 'color':
                return <Input
                    type="color"
                    disabled={e.disabled ? true : false}
                    name={e.name}
                    onChange={onChange}
                    value={state[e.name]}
                    readOnly={e.readOnly ? true : false}
                />
                break;
            case 'description':
                return <Descriptions.Item label="UserName">{state[e.name] || ''}</Descriptions.Item>
                break;
            case 'label': return <label name={e.name}>{state[e.name]}</label>
                break;
            case 'select':
                // console.log(e.name)
                return (<Select allowClear={e.allowClear ? true : false} onChange={(evt) => handleSelect(evt, e.name)} name={e.name}
                    defaultValue={state[e.name]} value={state[e.name]} disabled={e.disabled ? true : false}
                    placeholder={e.placeholder ? e.placeholder : ''} >

                    {
                        e.options && e.options.map((el, i) => (
                            <Option key={i} value={el[e.Value_Option] || el[e.name]} >{el[e.DS_Option]}</Option>
                        ))
                    }
                </Select>
                )
                break;

            case 'selectMultiple':
                return (<Select mode={e.mode ? 'multiple' : ''} allowClear placeholder={e.placeholder ? e.placeholder : ''}
                    onChange={(evt) => handleSelect(evt, e.name)} name={e.name} defaultValue={state[e.name] || []} value={state[e.name] || []} disabled={e.disabled}>
                    {
                        e.options && e.options.map((el, i) => (
                            <Option key={i} value={el[e.Value_Option] || el[e.name]} >{el[e.DS_Option]}</Option>
                        ))
                    }
                </Select>
                )
                break;
            case 'select2':
                    return <Select allowClear={e.allowClear ? true : false} showSearch disabled={e.disabled} placeholder={e.placeholder ? e.placeholder : ''}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    onChange={(evt) => handleSelect(evt, e.name)} name={e.name} value={state[e.name]} >
                    {
                        e.options.map((el, i) => (
                            <Option key={e.name + i} value={el[e.Value_Option] || el[e.name]}>{el[e.DS_Option]}</Option>
                        ))
                    }
                </Select>
                break;
            case 'radio':
                return <Radio.Group onChange={onChange} value={state[e.name]} name={e.name} disabled={e.disabled}>
                    {
                        e.options.map((el, i) => (
                            <Radio key={i} value={el[e.name]}>{el[e.DS_Option]}</Radio>
                        ))
                    }
                </Radio.Group>
                break;
            case 'checkbox':
                // Ant desing usa una rejilla de 24 columnas
                return <Checkbox.Group name={e.name} style={{ width: '100%' }}>
                    <br />
                    <Row>
                        {
                            e.options.map((el, i) => (
                                <Col span={24}>
                                    <Checkbox key={i} value={el[e.name]}>{el[e.DS_Option]}</Checkbox>
                                </Col>
                            ))
                        }
                    </Row>
                </Checkbox.Group>
                break;
            case 'an_checkbox':
                // Este checkbox es cuando solo se desee una opción
                return <Checkbox value={state[e.name]} name={e.name} disabled={e.disabled}
                    onChange={(evt) => handleSelect(evt.target.checked, e.name)} />
                break;
            case 'datepicker2':
                return <DatePicker onChange={(value, dateString) => handleSelect(dateString, e.name)} style={{ width: '100%' }} disabled={e.disabled} picker={e.options} placeholder={e.placeholder} value={state[e.name]} format={dateFormat} />
                break;
            case 'datepicker':
                return <DatePicker {...e.props} onChange={(value, dateString) => handleSelect(dateString, e.name)} style={{ width: '100%' }} disabled={e.disabled} value={state[e.name] && moment(state[e.name], dateFormat)} format={dateFormat} readOnly={e.readOnly ? true : false} />
                break;
            case 'switch':
                return <Switch onChange={(evt) => handleSelect(evt, e.name)} name={e.name} checked={!!+state[e.name]} disabled={e.disabled} />
                break;
            case 'switchSelected':
                return <Switch onChange={(evt) => handleSelect(evt, e.name)} name={e.name} checked={!!+state[e.name]} defaultChecked={e.checked} disabled={e.disabled} checkedChildren={e.checkedChildren} unCheckedChildren={e.unCheckedChildren} />
                break;
            case 'time':
                return <TimePicker value={state[e.name] && moment(state[e.name], format)} format="h:mm a" style={{ width: '100%' }} use12Hours onChange={(time, timeString) => handleSelect(timeString, e.name)} disabled={e.disabled} />
                break;
            case 'textarea':
                return <TextArea rows={e.rows || '3'} value={state[e.name]} name={e.name} onChange={onChange} readOnly={e.readOnly ? true : false} disabled={e.disabled ? true : false} showCount />
                break;
            case 'money':
                return <CustomInputMoney className='ant-input' onValueChange={(evt) => handleSelect(evt, e.name)} value={state[e.name] || 0} cantDecimales={4}/>
                // return <InputNumber
                //     style={{ width: '100%' }}
                //     value={state[e.name]} name={e.name}
                //     formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                //     parser={value => value.replace(/\$\s?|(,*)/g, '')}
                //     onChange={(evt) => handleSelect(evt, e.name)}
                //     disabled={e.disabled ? true : false}
                //     readOnly={e.readOnly ? true : false}
                //     min={0}
                // />
                break;
                case 'money2':
                return <CustomInputMoney className='ant-input' onValueChange={(evt) => handleSelect(evt, e.name)} value={state[e.name] || 0} cantDecimales={4}/>
                // return <InputNumber
                //     style={{ width: '100%' }}
                //     value={state[e.name]} name={e.name}
                //     formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                //     parser={value => value.replace(/\$\s?|(,*)/g, '')}
                //     onChange={(evt) => handleSelect(evt, e.name)}
                //     disabled={e.disabled ? true : false}
                //     readOnly={e.readOnly ? true : false}
                //     min={0}
                // />
                break;
            case 'number':
                return <InputNumber
                    style={{ width: '100%' }}
                    value={state[e.name]} name={e.name}
                    onChange={(evt) => handleSelect(evt, e.name)}
                    readOnly={e.readOnly ? true : false}
                    disabled={e.disabled ? true : false}
                    min={e.min ? e.min : '0'}
                    placeholder={e.placeholder ? e.placeholder : '1'}
                    max={e.max && e.max}
                />
                break;
            case 'Select2':
                return <Select showSearch disabled={e.disabled} placeholder={e.placeholder ? e.placeholder : ''}
                    // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} 
                    onChange={(evt) => handleSelect(evt, e.name)} name={e.name} value={state[e.name]} >
                    {
                        e.options.map((el, i) => (
                            <Option key={i} value={el[e.Value_Option] || el[e.name]}>{el[e.DS_Option]}</Option>
                        ))
                    }
                </Select>
                break;
            default:
                return <h1>Tipo de dato no definido</h1>
                break;
        }
    }

    return (
        <>
            {
                campos.map((e, index) => {
                    return (
                        <div className={e.className || 'col-md-12'} key={'div-'+e.name+index}>

                            <Form.Item
                                key={'input-'+e.name+index}
                                label={e.label}
                                name={e.name}

                                valuePropName={e.name}
                                rules={[
                                    {
                                        required: e.required,
                                        message: t('Label_Requerido'),
                                    },
                                ]}
                            >
                                {
                                    switchCase(e)
                                }

                            </Form.Item>
                        </div>
                    )
                }
                )
            }
            {
                !!label && <div className="col-md-12">
                    <p className='custom-labelRequired'>* Campos requeridos</p>
                </div>
            }
        </>
    );
}

export default withTranslation()(ConstruirFormularios)
