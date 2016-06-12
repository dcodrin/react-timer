import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        const spy = expect.createSpy();

        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        const $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.state.seconds = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should NOT call onSetCountdown if invalid seconds entered', () => {
        const spy = expect.createSpy();

        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        const $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.state.seconds = '109aaa98';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy). toNotHaveBeenCalled();
    });

});