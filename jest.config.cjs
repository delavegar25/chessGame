module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },

    moduleNameMapper: {
        '\\.(css|less|scss|sass)$':
        'identity-obj-proxy',
        '/^.+\.(jpg|jpeg|png|gif|svg)$':
        'jest-transform-stub',
    },
   
    setupFileAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};