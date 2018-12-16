import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                
            }
        });
    }

    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

        // Only show error after a field is touched.
        const nameError = isFieldTouched('name') && getFieldError('name');
        const qtyError = isFieldTouched('qty') && getFieldError('qty');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={nameError ? 'error' : ''}
                    help={nameError || ''}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input name' }],
                    })(
                        <Input   placeholder="name" />
                    )}
                </FormItem>
                <FormItem
                    validateStatus={qtyError ? 'error' : ''}
                    help={qtyError || ''}
                >
                    {getFieldDecorator('qty', {
                        rules: [{ required: true, message: 'Please input qty!' }],
                    })(
                        <Input   placeholder="qty" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Add
            </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;