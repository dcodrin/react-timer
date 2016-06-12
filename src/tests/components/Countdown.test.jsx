import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.totalSeconds).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            //for async test use the provided done(), must be passed as argument to it.
            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(9);
                done();
            }, 1001);
        });

        it('should NOT set state of total seconds to negative', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);
            //for async test use the provided done(), must be passed as argument to it.
            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(0);
                done();
            }, 2001);
        });

        it('should pause countdown on paused status', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop countdown on stopped status', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});