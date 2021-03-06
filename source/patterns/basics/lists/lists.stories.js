import React from 'react';

export default {
    title: 'Basics/Typography/Lists'
};

export const unordered = () => (
    <ul>
        <li>This is a list item in an unordered list</li>
        <li>An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. </li>
        <li>
            Lists can be nested inside of each other
            <ul>
                <li>This is a nested list item</li>
                <li>This is another nested list item in an unordered list</li>
            </ul>
        </li>
        <li>This is the last list item</li>
    </ul>
);

export const ordered = () => (
    <ol>
        <li>This is a list item in an ordered list</li>
        <li>An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.</li>
        <li>
            Lists can be nested inside of each other
            <ol>
                <li>This is a nested list item</li>
                <li>This is another nested list item in an ordered list</li>
            </ol>
        </li>
        <li>This is the last list item</li>
    </ol>
);