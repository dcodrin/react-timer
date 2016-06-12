import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            const controls = TestUtils.renderIntoDocument(<Controls status="started"/>);
            const $el = $(ReactDOM.findDOMNode(controls));
            const pausedButton = $el.find('button:contains(Pause)');
            //if one element is found pausedButton will be an array with the length of 1
            expect(pausedButton.length).toBe(1);
        });
        it('should render start when paused', () => {
            const controls = TestUtils.renderIntoDocument(<Controls status="paused"/>);
            const $el = $(ReactDOM.findDOMNode(controls));
            const startButton = $el.find('button:contains(Start)');
            //if one element is found startButton will be an array with the length of 1
            expect(startButton.length).toBe(1);
        });
    });
});