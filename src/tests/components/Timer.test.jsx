import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on status started', (done) => {
        const timer = TestUtils.renderIntoDocument(<Timer />);
        const $el = $(ReactDOM.findDOMNode(timer));
        TestUtils.Simulate.click($el.find('button:contains(Start)')[0]);

        setTimeout(() => {
            expect(timer.state.totalSeconds).toBeGreaterThan(0);
            done();
        }, 1001);
    });

    it('should pause timer on status paused', () => {
        const timer = TestUtils.renderIntoDocument(<Timer />);
        const $el = $(ReactDOM.findDOMNode(timer));

        setTimeout(() => {
            TestUtils.Simulate.click($el.find('button:contains(Start)')[0]);
            const pausedTime = timer.state.totalSeconds;
            setTimeout(() => {
                TestUtils.Simulate.click($el.find('button:contains(Pause)')[0]);
                const currentTime = timer.state.totalSeconds;
                expect(pausedTime).toBe(currentTime);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        }, 1001);
    });

    it('should clear timer on status stopped', () => {
        const timer = TestUtils.renderIntoDocument(<Timer />);
        const $el = $(ReactDOM.findDOMNode(timer));
        TestUtils.Simulate.click($el.find('button:contains(Start)')[0]);

        setTimeout(() => {
            TestUtils.Simulate.click($el.find('button:contains(Clear)')[0]);
            expect(timer.state.totalSeconds).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
        }, 1001);

    });

});