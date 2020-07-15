import sampleIcon from '../../../images/samples/icon.svg';

export default [
    {
        label: 'Primary Nav Link 1',
        url: '/',
        isCurrentPage: true
    },
    {
        label: 'Primary Nav Link 2',
        url: '/'
    },
    {
        label: 'Primary Nav Parent 1',
        items: [
            {
                label: 'Primary Nav Child 1',
                url: '/'
            },
            {
                label: 'Primary Nav Child 2',
                url: '/'
            },
            {
                label: 'Primary Nav Child 3',
                url: '/'
            }
        ]
    },
    {
        label: 'Primary Nav Parent 2',
        items: [
            {
                label: 'Primary Nav Child 1',
                url: '/'
            },
            {
                label: 'Primary Nav Child 2',
                url: '/'
            }
        ]
    },
    {
        label: 'Primary Nav Link 3',
        url: '/'
    }
];