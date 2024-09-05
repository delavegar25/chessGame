module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },

    moduleNameMapper: {
        '\\.(css|less|scss|sass)$':
        'identity-obj-proxy',
        '/^.+\.(jpg|jpeg|png|gif|svg)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
   
    setupFileAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};